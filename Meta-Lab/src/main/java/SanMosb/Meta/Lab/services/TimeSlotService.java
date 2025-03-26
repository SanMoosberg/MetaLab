package SanMosb.Meta.Lab.services;

import SanMosb.Meta.Lab.models.SlotStatus;
import SanMosb.Meta.Lab.models.TimeSlot;
import SanMosb.Meta.Lab.repositories.TimeSlotRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
public class TimeSlotService {

    private final TimeSlotRepository timeSlotRepository;

    public TimeSlotService(TimeSlotRepository timeSlotRepository) {
        this.timeSlotRepository = timeSlotRepository;
    }

    @Transactional
    public List<TimeSlot> generateTimeSlots(LocalDate date) {
        LocalTime start = LocalTime.of(9, 0);
        LocalTime end = LocalTime.of(18, 0);
        Duration step = Duration.ofMinutes(30);
        List<TimeSlot> newSlots = new ArrayList<>();
        LocalTime current = start;

        while (!current.isAfter(end)) {
            LocalTime slotEnd = current.plus(step);
            if (slotEnd.isAfter(end)) {
                break;
            }
            boolean exists = timeSlotRepository.existsByDateAndStartTimeAndEndTime(date, current, slotEnd);
            if (!exists) {
                TimeSlot slot = new TimeSlot();
                slot.setDate(date);
                slot.setStartTime(current);
                slot.setEndTime(slotEnd);
                slot.setStatus(SlotStatus.FREE);
                newSlots.add(slot);
            }
            current = slotEnd;
        }
        List<TimeSlot> savedSlots = timeSlotRepository.saveAll(newSlots);
        return savedSlots;
    }

    public List<TimeSlot> getSlotsByDate(LocalDate date) {
        List<TimeSlot> slots = timeSlotRepository.findByDate(date);
        return slots;
    }

    public TimeSlot getSlotById(Long slotId) {
        TimeSlot slot = timeSlotRepository.findById(slotId)
                .orElseThrow(() -> new RuntimeException("Slot not found: " + slotId));
        return slot;
    }

    @Transactional
    public TimeSlot blockSlot(Long slotId) {
        TimeSlot slot = timeSlotRepository.findById(slotId)
                .orElseThrow(() -> new RuntimeException("Slot not found: " + slotId));
        slot.setStatus(SlotStatus.ADMIN_BLOCKED);
        TimeSlot updatedSlot = timeSlotRepository.save(slot);
        return updatedSlot;
    }

    @Transactional
    public TimeSlot saveSlot(TimeSlot slot) {
        TimeSlot savedSlot = timeSlotRepository.save(slot);
        return savedSlot;
    }

    @Scheduled(cron = "0 0 0 * * ?")
    @Transactional
    public void removeOldTimeslots() {
        LocalDate today = LocalDate.now();
        timeSlotRepository.deleteAllByDateBefore(today);
    }
}
