const Home = {
    template: `
        <div class="home-container">
            <section class="content-section beige">
                <div class="section-content reverse">
                    <div class="image-block">
                        <img src="images/ab1.jpg" alt="Современная лаборатория">
                    </div>
                    <div class="text-block">
                        <h2>Современная лабораторная диагностика</h2>
                        <p>MetaLaboratory – это инновационный медицинский центр, оснащенный передовым оборудованием для проведения всех видов лабораторных исследований. Мы предлагаем широкий спектр анализов и диагностических процедур с максимальной точностью результатов.</p>
                        <router-link to="/about" class="primary-button">Узнать больше</router-link>
                    </div>
                </div>
            </section>

            <section class="content-section white">
                <div class="section-content">
                    <div class="image-block">
                        <img src="images/ab2.jpg" alt="Лабораторные исследования">
                    </div>
                    <div class="text-block">
                        <h2>Широкий спектр исследований</h2>
                        <p>В нашей лаборатории вы можете пройти более 1000 видов различных исследований: от простого анализа крови до сложных генетических тестов. Мы используем современные методики и оборудование экспертного класса для обеспечения максимальной точности результатов.</p>
                        <router-link to="/catalog" class="primary-button">Смотреть каталог</router-link>
                    </div>
                </div>
            </section>

            <section class="content-section advantages">
                <div class="advantages-container">
                    <h2>Почему выбирают нас?</h2>
                    <div class="advantages-list">
                        <div class="advantage-item">
                            <div class="advantage-circle">
                                <i class="fas fa-clock"></i>
                            </div>
                            <h3>Быстрые результаты</h3>
                            <p>Выдача результатов от 2 часов до 1 дня</p>
                        </div>
                        <div class="advantage-item">
                            <div class="advantage-circle">
                                <i class="fas fa-medal"></i>
                            </div>
                            <h3>Точность</h3>
                            <p>Современное оборудование экспертного класса</p>
                        </div>
                        <div class="advantage-item">
                            <div class="advantage-circle">
                                <i class="fas fa-wallet"></i>
                            </div>
                            <h3>Доступные цены</h3>
                            <p>Гибкая система скидок и акции</p>
                        </div>
                        <div class="advantage-item">
                            <div class="advantage-circle">
                                <i class="fas fa-user-md"></i>
                            </div>
                            <h3>Опытные специалисты</h3>
                            <p>Врачи высшей категории</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content-section light-pink">
                <div class="section-content reverse">
                    <div class="image-block">
                        <img src="images/ab3.jpg" alt="Команда специалистов">
                    </div>
                    <div class="text-block">
                        <h2>Экспертная команда специалистов</h2>
                        <p>Наши врачи и лаборанты – профессионалы высочайшего класса с многолетним опытом работы. Мы постоянно повышаем квалификацию и внедряем новейшие методики исследований для обеспечения максимальной точности результатов.</p>
                    </div>
                </div>
            </section>

            <section class="content-section white">
                <div class="section-content">
                    <div class="image-block">
                        <img src="images/ab4.jpg" alt="Комфортные условия">
                    </div>
                    <div class="text-block">
                        <h2>Комфорт и безопасность</h2>
                        <p>Мы создали максимально комфортные условия для наших пациентов. Современное оборудование, уютные помещения и внимательный персонал сделают ваше посещение приятным и безопасным. Результаты исследований доступны в личном кабинете сразу после готовности.</p>
                    </div>
                </div>
            </section>
        </div>
    `
};


const About = {
    template: `
        <div class="home-container">
            <section class="content-section beige">
                <div class="section-content">
                    <div class="text-block">
                        <h2>Наша история</h2>
                        <p>MetaLaboratory начала свою работу в 2010 году как небольшая частная лаборатория. За прошедшие годы мы выросли в современный диагностический центр, оснащенный передовым оборудованием и укомплектованный командой высококвалифицированных специалистов.</p>
                    </div>
                    <div class="image-block">
                        <img src="images/his1.jpg" alt="История лаборатории">
                    </div>
                </div>
            </section>

            <section class="content-section white">
                <div class="section-content reverse">
                    <div class="text-block">
                        <h2>Наша миссия</h2>
                        <p>Мы стремимся сделать высококачественную лабораторную диагностику доступной для каждого. Наша миссия - помогать врачам и пациентам получать точную и своевременную информацию о здоровье, используя передовые технологии и профессиональный опыт.</p>
                        <ul class="mission-list">
                            <li>Обеспечение высочайшего качества исследований</li>
                            <li>Внедрение инновационных методик</li>
                            <li>Постоянное совершенствование сервиса</li>
                            <li>Забота о здоровье каждого пациента</li>
                        </ul>
                    </div>
                    <div class="image-block">
                        <img src="images/his2.jpg" alt="Миссия">
                    </div>
                </div>
            </section>

            <section class="content-section light-pink">
                <div class="section-content">
                    <div class="text-block">
                        <h2>Наши цели</h2>
                        <p>Мы постоянно развиваемся и ставим перед собой амбициозные цели для улучшения качества медицинской диагностики в России.</p>
                        <ul class="mission-list">
                            <li>Внедрение новейших методов диагностики и автоматизации процессов</li>
                            <li>Расширение сети лабораторий и пунктов забора анализов</li>
                            <li>Развитие профессиональных компетенций медицинского персонала</li>
                            <li>Укрепление партнерских отношений с медицинскими учреждениями</li>
                        </ul>
                    </div>
                    <div class="image-block">
                        <img src="images/his3.jpg" alt="Наши цели">
                    </div>
                </div>
            </section>
        </div>
    `
};

const Catalog = {
    data() {
        return {
            client: null,
            products: [],
            isAdmin: false,
            isAuthenticated: false,
            isEditing: false,
            newProduct: {
                name: "",
                description: "",
                price: 0
            },
            showNotification: false,
            notificationText: '',
            notificationType: ''
        };
    },
    async created() {
        // Получаем список анализов
        const response = await axios.get("/api/products");
        this.products = response.data;

        // Проверяем авторизацию и права администратора
        const token = localStorage.getItem("jwtToken");
        if (token) {
            this.isAuthenticated = true;
            const profileResponse = await axios.get("/api/profile", {
                headers: { Authorization: `Bearer ${token}` },
            });
            this.client = profileResponse.data;
            this.isAdmin = profileResponse.data.role === "ADMIN";
        }
    },
    methods: {
        async addOrEditProduct() {
            try {
                const token = localStorage.getItem("jwtToken");

                if (this.isEditing) {
                    // Если редактируем, отправляем PATCH-запрос
                    await axios.patch(`/api/products/${this.newProduct.id}`, this.newProduct, {
                        headers: {Authorization: `Bearer ${token}`},
                    });
                } else {
                    // Если добавляем новый анализ, отправляем POST-запрос
                    await axios.post("/api/products", this.newProduct, {
                        headers: {Authorization: `Bearer ${token}`},
                    });
                }

                // Сброс формы
                this.newProduct = {id: null, name: "", description: "", price: 0};
                this.isEditing = false;

                // Обновляем список анализов
                const response = await axios.get("/api/products");
                this.products = response.data;
            } catch (error) {
                alert("Ошибка: " + error.response.data.message);
            }
        },
        startEditing(product) {
            // Заполняем форму данными выбранного анализа
            this.newProduct = {...product};
            this.isEditing = true;
        },
        cancelEditing() {
            // Отмена редактирования, сброс формы
            this.newProduct = {id: null, name: "", description: "", price: 0};
            this.isEditing = false;
        },
        async deleteProduct(id) {
            if (confirm("Вы уверены, что хотите удалить этот анализ?")) {
                try {
                    const token = localStorage.getItem("jwtToken");
                    await axios.delete(`/api/products/${id}`, {
                        headers: {Authorization: `Bearer ${token}`},
                    });

                    // Обновляем список анализов
                    const response = await axios.get("/api/products");
                    this.products = response.data;
                } catch (error) {
                    alert("Ошибка при удалении анализа: " + error.response.data.message);
                }
            }
        },
        async fetchUserProfile() {
            try {
                const response = await axios.get('/api/profile');
                this.client = response.data;
                console.log("Профиль загружен:", response.data);
            } catch (error) {
                console.error("Ошибка загрузки профиля:", error);
            }
        },
        isProductPurchased(productId) {
            return this.client?.productList?.some(p => p.id === productId) || false;
        },
        async buyProduct(clientId, productId) {
            if (this.isProductPurchased(productId)) {
                this.showToast('Этот анализ уже приобретен', 'error');
                return;
            }

            try {
                const token = localStorage.getItem("jwtToken");

                const response = await axios.post(`/api/clients/${clientId}/${productId}`, {}, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                // Логируем успешный ответ
                console.log("Успешный ответ:", response);

                if (response.status >= 200 && response.status < 300) {
                    this.showToast('✓ Анализ добавлен в корзину', 'success');
                } else {
                    this.showToast('✗ Ошибка при добавлении анализа (неожиданный статус)', 'error');
                }

                await this.fetchUserProfile();
            } catch (error) {
                console.error("Ошибка при добавлении анализа:", error);
                this.showToast('✗ Ошибка при добавлении анализа', 'error');
            }
        },
        async removeOrder(clientId, productId) {
            try {
                const token = localStorage.getItem("jwtToken");
                await axios.delete(`api/clients/${clientId}/${productId}`, {
                    headers: {Authorization: `Bearer ${token}`},
                });
                this.showToast('✓ Анализ удален из корзины', 'success');
                await this.fetchUserProfile();
            } catch (error) {
                console.error("Ошибка при удалении анализа:", error);
                this.showToast('✗ Ошибка при удалении анализа', 'error');
            }
        },
        showToast(text, type) {
            this.notificationText = text;
            this.notificationType = type;
            this.showNotification = true;
            setTimeout(() => {
                this.showNotification = false;
            }, 3000);
        }
    },
    template: `
<div class="catalog-container">
    <!-- Добавляем уведомление в начало шаблона -->
    <div v-if="showNotification" 
         :class="['notification', notificationType]">
        {{ notificationText }}
    </div>

    <!-- Панель администратора -->
    <div v-if="isAdmin" class="admin-panel">
        <h2>Панель администратора</h2>
        <div class="add-product-form">
            <input v-model="newProduct.name" placeholder="Название анализа">
            <textarea v-model="newProduct.description" placeholder="Описание"></textarea>
            <input v-model="newProduct.price" type="number" step="0.01" placeholder="Цена">
            
            <button @click="addOrEditProduct" class="admin-button">
                {{isEditing ? "Изменить анализ" : "Добавить анализ"}}
            </button>
            
            <button v-if="isEditing" @click="cancelEditing" class="cancel-button">
                Отмена
            </button>
        </div>
    </div>

    <!-- Список анализов -->
    <div class="analysis-grid">
        <div v-for="product in products" :key="product.id" class="analysis-item">
            <div class="product-status" :class="{ 
                show: isProductPurchased(product.id),
                purchased: isProductPurchased(product.id) 
            }">
                {{ isProductPurchased(product.id) ? 'Приобретено' : '' }}
            </div>
            <div class="analysis-content">
                <div class="analysis-info">
                    <h2>{{ product.name }}</h2>
                    <p>{{ product.description }}</p>
                </div>
                <div class="analysis-footer">
                    <span class="price">{{ Number(product.price).toFixed(2) }} €</span>
                    <div class="analysis-actions">
                        <div v-if="isAuthenticated" class="action-buttons">
                            <button class="buy-button" 
                                    title="Добавить анализ"
                                    @click="buyProduct(client.id, product.id)">
                            </button>
                            <button class="remove-button" 
                                    title="Удалить анализ"
                                    @click="removeOrder(client.id, product.id)">
                            </button>
                        </div>
                        <div v-if="isAdmin" class="admin-actions">
                            <button class="edit-button" @click="startEditing(product)">
                                Изменить
                            </button>
                            <button class="delete-button" @click="deleteProduct(product.id)">
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    `
};

const Contacts = {
    template: `
        <div class="contacts-container">
            <div class="contacts-grid">
                <div class="info-grid">
                    <div class="info-card">
                        <h3>Адрес</h3>
                        <div class="address-content">
                            <p>г. Москва, ул. Академика Королева, 12</p>
                            <p>Медицинский центр "MetaLaboratory"</p>
                            <p class="metro"><i class="fas fa-subway"></i> 5 минут от м. ВДНХ</p>
                            <div class="transport-info">
                                <div class="transport-item">
                                    <i class="fas fa-walking"></i>
                                    <span>От метро ВДНХ: 5-7 минут пешком по аллее Космонавтов, мимо фонтана "Дружба народов"</span>
                                </div>
                                <div class="transport-item">
                                    <i class="fas fa-bus"></i>
                                    <span>Автобусы: 15, 24, 85 (остановка "Улица Академика Королева")</span>
                                </div>
                                <div class="transport-item">
                                    <i class="fas fa-car"></i>
                                    <span>Личный транспорт: бесплатная парковка на территории центра</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="info-card">
                        <h3>Телефоны</h3>
                        <div class="contact-content">
                            <div class="contact-item">
                                <a href="tel:+74951234567">+7 (495) 123-45-67</a>
                                <span>Общие вопросы и консультации</span>
                                <p class="contact-details">Ответим на все вопросы о наших услугах, ценах и акциях. Поможем выбрать удобное время для посещения.</p>
                            </div>
                            <div class="contact-item">
                                <a href="tel:+74951234568">+7 (495) 123-45-68</a>
                                <span>Запись на анализы и исследования</span>
                                <p class="contact-details">Запись на все виды лабораторных исследований, включая срочные анализы и комплексную диагностику.</p>
                            </div>
                        </div>
                    </div>

                    <div class="info-card">
                        <h3>Email</h3>
                        <div class="contact-content">
                            <div class="contact-item">
                                <a href="mailto:info@metalab.ru">info@metalab.ru</a>
                                <span>Общие вопросы и информация</span>
                                <p class="contact-details">Отправьте нам email для получения подробной информации об услугах, корпоративном обслуживании или сотрудничестве.</p>
                            </div>
                            <div class="contact-item">
                                <a href="mailto:support@metalab.ru">support@metalab.ru</a>
                                <span>Техническая поддержка</span>
                                <p class="contact-details">Решение вопросов с личным кабинетом, получением результатов онлайн и работой сайта.</p>
                            </div>
                        </div>
                    </div>

                    <div class="info-card">
                        <h3>Режим работы</h3>
                        <div class="schedule-content">
                            <div class="schedule-item">
                                <span class="day">Пн-Пт:</span>
                                <span class="time">8:00 - 20:00</span>
                            </div>
                            <div class="schedule-item">
                                <span class="day">Сб:</span>
                                <span class="time">9:00 - 18:00</span>
                            </div>
                            <div class="schedule-item">
                                <span class="day">Вс:</span>
                                <span class="time">9:00 - 16:00</span>
                            </div>
                            <div class="schedule-note">
                                <p>Забор анализов: ежедневно с 8:00 до 11:00</p>
                                <p>Срочные анализы: в течение всего рабочего дня</p>
                                <p>Выдача результатов: круглосуточно в личном кабинете</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="map-section">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.347992602746!2d26.678260577264577!3d58.37066788738478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb3708ae89c8c5%3A0x9ee86db8e6696d74!2sArhitekti%20tn%2010%2C%2050407%20Tartu!5e0!3m2!1set!2see!4v1739274113884!5m2!1set!2see" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    `
};

const Auth = {
    data() {
        return {
            isLogin: true,
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            errorMessage: '',
            successMessage: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('/api/auth/login', {
                    username: this.username,
                    password: this.password
                });

                if (response.status === 200) {
                    const token = response.data.token;
                    localStorage.setItem('jwtToken', token);
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    this.$root.updateAuthState();
                    this.$router.push('/profile');
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    this.errorMessage = 'Неправильное имя пользователя или пароль';
                } else {
                    this.errorMessage = 'Произошла ошибка при попытке входа.';
                }
            }
        },

        async register() {
            if (this.password !== this.confirmPassword) {
                this.errorMessage = "Пароли не совпадают";
                return;
            }

            try {
                const response = await axios.post('/api/auth/register', {
                    username: this.username,
                    password: this.password,
                    email: this.email
                });

                this.successMessage = "Регистрация успешна! Вы можете войти.";
                this.errorMessage = '';
                this.isLogin = true;
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    if (error.response.data && typeof error.response.data === 'object') {
                        this.errorMessage = Object.values(error.response.data).join('. ');
                    } else {
                        this.errorMessage = 'Ошибка регистрации. Попробуйте еще раз.';
                    }
                } else {
                    this.errorMessage = 'Произошла ошибка при попытке регистрации. Попробуйте еще раз.';
                }
                this.successMessage = '';
            }
        },
        toggleForm() {
            this.isLogin = !this.isLogin;
            this.errorMessage = '';
            this.successMessage = '';
        }
    },
    template: `
    <div class="auth-container">
        <div class="auth-card">
            <div class="auth-header">
                <h2>{{isLogin ? 'Вход в систему' : 'Регистрация'}}</h2>
                <p class="auth-subtitle">
                    {{isLogin ? 'Войдите в свой аккаунт для доступа к услугам' : 'Создайте аккаунт для доступа к услугам'}}
                </p>
            </div>

            <form @submit.prevent="isLogin ? login() : register()" class="auth-form">
                <div class="form-group">
                    <label for="username">Имя пользователя</label>
                    <input 
                        id="username"
                        type="text" 
                        v-model="username" 
                        required
                        class="auth-input"
                        placeholder="Введите имя пользователя"
                    >
                </div>

                <div v-if="!isLogin" class="form-group">
                    <label for="email">Электронная почта</label>
                    <input 
                        id="email"
                        type="email" 
                        v-model="email" 
                        required
                        class="auth-input"
                        placeholder="Введите email"
                    >
                </div>

                <div class="form-group">
                    <label for="password">Пароль</label>
                    <input 
                        id="password"
                        type="password" 
                        v-model="password" 
                        required
                        class="auth-input"
                        placeholder="Введите пароль"
                    >
                </div>

                <div v-if="!isLogin" class="form-group">
                    <label for="confirmPassword">Подтверждение пароля</label>
                    <input 
                        id="confirmPassword"
                        type="password" 
                        v-model="confirmPassword" 
                        required
                        class="auth-input"
                        placeholder="Повторите пароль"
                    >
                </div>

                <div class="auth-messages">
                    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
                    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
                </div>

                <button type="submit" class="auth-button">
                    {{ isLogin ? 'Войти' : 'Зарегистрироваться' }}
                </button>
            </form>

            <div class="auth-footer">
                <p>
                    {{isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}}
                    <a href="#" @click.prevent="toggleForm">
                        {{isLogin ? 'Зарегистрируйтесь' : 'Войдите'}}
                    </a>
                </p>
            </div>
        </div>
    </div>
    `
};

const Profile = {
    data() {
        return {
            client: null,
            booking: null,
            showNotification: false,
            notificationText: '',
            notificationType: ''
        };
    },
    methods: {
        async fetchUserProfile() {
            try {
                const response = await axios.get('/api/profile');
                this.client = response.data;
                console.log('Профиль пользователя:', this.client);
                if (this.client && this.client.id) {
                    await this.fetchUserBooking(this.client.id);
                }
            } catch (error) {
                console.error('Ошибка при загрузке профиля:', error);
            }
        },
        async fetchUserBooking(clientId) {
            try {
                const response = await axios.get(`/api/main/bookings/by-client/${clientId}`);

                if (response.data && typeof response.data === 'object' && response.data.id) {
                    this.booking = response.data;
                } else {
                    this.booking = null;
                }
            } catch (error) {
                console.error('Ошибка при загрузке бронирования:', error);
                this.booking = null;
            }
        },
        async cancelBooking(bookingId) {
            try {
                await axios.delete(`/api/main/bookings/${bookingId}`);
                this.showToast('Бронирование отменено', 'success');
                this.booking = null;
            } catch (error) {
                console.error('Ошибка при отмене бронирования:', error);
                this.showToast('Ошибка при отмене бронирования', 'error');
            }
        },
        logout() {
            localStorage.removeItem('jwtToken');
            delete axios.defaults.headers.common['Authorization'];
            this.$root.updateAuthState();
            this.$router.push('/login');
        },
        showToast(text, type) {
            this.notificationText = text;
            this.notificationType = type;
            this.showNotification = true;
            setTimeout(() => {
                this.showNotification = false;
            }, 3000);
        },
        formatDate(dateStr) {
            if (!dateStr) return '';
            try {
                const date = new Date(dateStr);
                return date.toLocaleDateString('ru-RU');
            } catch (e) {
                console.error('Ошибка форматирования даты:', e);
                return dateStr;
            }
        },
        formatTime(timeStr) {
            if (!timeStr) return '';
            try {
                return timeStr.substring(0, 5);
            } catch (e) {
                console.error('Ошибка форматирования времени:', e);
                return timeStr;
            }
        }
    },
    computed: {
        calculateTotal() {
            if (!this.client || !this.client.productList) return "0.00";
            const total = this.client.productList.reduce((sum, product) => sum + Number(product.price), 0);
            return total.toFixed(2);
        },
        hasBooking() {
            return this.booking !== null;
        }
    },
    mounted() {
        this.fetchUserProfile();
    },
    template: `
        <div class="profile-container">
            <!-- Уведомление -->
            <div v-if="showNotification" 
                 :class="['notification', notificationType]">
                {{ notificationText }}
            </div>

            <div class="profile-wrapper">
                <!-- Основная информация профиля -->
                <div class="profile-card">
                    <div class="profile-header">
                        <h2>Личный кабинет</h2>
                    </div>
                    
                    <div v-if="client" class="profile-content">
                        <div class="profile-info-section">
                            <div class="profile-avatar">
                                <div class="avatar-circle">
                                    {{ client.username.charAt(0).toUpperCase() }}
                                </div>
                            </div>
                            
                            <div class="profile-info">
                                <div class="info-group">
                                    <label>Имя пользователя</label>
                                    <p>{{ client.username }}</p>
                                </div>
                                <div class="info-group">
                                    <label>Email</label>
                                    <p>{{ client.email }}</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Секция бронирования -->
                        <div class="bookings-section">
                            <h3>Моё бронирование</h3>
                            <div v-if="hasBooking" class="bookings-list">
                                <div class="booking-item">
                                    <div class="booking-info">
                                        <div class="booking-date">
                                            {{ booking.timeSlot ? formatDate(booking.timeSlot.date) : 'Дата не указана' }}
                                        </div>
                                        <div class="booking-time">
                                            {{ booking.timeSlot ? formatTime(booking.timeSlot.startTime) + ' - ' + formatTime(booking.timeSlot.endTime) : 'Время не указано' }}
                                        </div>
                                    </div>
                                    <button @click="cancelBooking(booking.id)" 
                                            class="cancel-booking-btn">
                                        Отменить
                                    </button>
                                </div>
                            </div>
                            <div v-else class="empty-bookings">
                                <i class="fas fa-calendar-times"></i>
                                <p>У вас пока нет бронирований</p>
                                <router-link to="/booking" class="book-time-btn">
                                    Забронировать время
                                </router-link>
                            </div>
                        </div>
                        
                        <button @click="logout" class="logout-button">
                            Выйти из аккаунта
                        </button>
                    </div>
                </div>

                <!-- Отдельная карточка с покупками -->
                <div class="purchases-card">
                    <div class="purchases-header">
                        <h3>Мои анализы</h3>
                        <span class="purchases-count">{{ client && client.productList ? client.productList.length : 0 }}</span>
                    </div>
                    <div v-if="client && client.productList && client.productList.length > 0" class="purchases-list">
                        <div v-for="product in client.productList" 
                             :key="product.id" 
                             class="purchase-item">
                            <h4>{{ product.name }}</h4>
                            <span class="product-price">{{ Number(product.price).toFixed(2) }} €</span>
                        </div>
                    </div>
                    <div v-if="client && client.productList && client.productList.length > 0" class="purchases-total">
                        <span class="total-label">Итого:</span>
                        <span class="total-amount">{{ calculateTotal }} €</span>
                    </div>
                    <div v-else class="empty-purchases">
                        <i class="fas fa-shopping-cart"></i>
                        <p>У вас пока нет купленных анализов</p>
                        <router-link to="/catalog" class="browse-catalog-btn">
                            Перейти в каталог
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    `
};

const Booking = {
    data() {
        return {
            currentWeek: '',
            weekDates: [],
            timeSlots: {},
            bookings: {},
            isAdmin: false,
            isAuthenticated: false,
            client: null,
            showNotification: false,
            notificationText: '',
            notificationType: '',
            timeIntervals: []
        };
    },
    async created() {
        const token = localStorage.getItem("jwtToken");
        if (token) {
            this.isAuthenticated = true;
            const profileResponse = await axios.get("/api/profile", {
                headers: { Authorization: `Bearer ${token}` },
            });
            this.client = profileResponse.data;
            this.isAdmin = profileResponse.data.role === "ADMIN";
        }

        for (let hour = 8; hour < 18; hour++) {
            this.timeIntervals.push(
                `${hour.toString().padStart(2, '0')}:00`,
                `${hour.toString().padStart(2, '0')}:30`
            );
        }
        this.setCurrentWeek(new Date());
    },
    methods: {
        setCurrentWeek(date) {
            const curr = new Date(date);
            const first = curr.getDate() - curr.getDay() + 1; // Понедельник

            this.weekDates = Array(7).fill().map((_, i) => {
                const day = new Date(curr.setDate(first + i));
                return this.formatDate(day);
            });

            this.loadWeekSlots();
        },
        formatDate(date) {
            return date.toISOString().split('T')[0];
        },
        canCancelBooking(slot) {
            if (!slot || slot.status !== 'BOOKED' || !this.client) {
                return false;
            }
            const booking = this.bookings[slot.id];
            if (!booking) {
                return false;
            }
            return booking.clientId === this.client.id;
        },

        async loadWeekSlots() {
            this.bookings = {};
            
            for (const date of this.weekDates) {
                try {
                    const response = await axios.get(`/api/main/slots`, {
                        params: { date: date }
                    });
                    const slots = response.data;
                    for (const slot of slots) {
                        if (slot.status === 'BOOKED') {
                            try {
                                const bookingResponse = await axios.get(`/api/main/bookings/${slot.id}`);
                                const booking = bookingResponse.data;
                                this.$set(this.bookings, slot.id, booking);
                            } catch (error) {
                                console.error(`Ошибка при получении информации о бронировании для слота ${slot.id}:`, error);
                            }
                        }
                    }
                    this.$set(this.timeSlots, date, slots);
                } catch (error) {
                    console.error(`Ошибка при получении слотов для даты ${date}:`, error);
                }
            }
        },


        async generateSlots(date) {
            try {
                console.log(`Генерация слотов для даты: ${date}`);
                await axios.post(`/api/main/slots/generate`, null, {
                    params: { date: date }
                });

                // После генерации сразу подгружаем актуальные слоты
                const response = await axios.get(`/api/main/slots`, {
                    params: { date: date }
                });

                this.timeSlots[date] = response.data;
                this.showToast('Слоты успешно сгенерированы', 'success');
            } catch (error) {
                console.error('Ошибка при генерации слотов:', error);
                this.showToast('Ошибка при генерации слотов', 'error');
            }
        },

        async blockSlot(slotId) {
            try {
                await axios.post(`/api/main/slots/${slotId}/block`);
                this.showToast('Слот заблокирован', 'success');
                await this.loadWeekSlots();
            } catch (error) {
                console.error('Ошибка при блокировке слота:', error);
                this.showToast('Ошибка при блокировке слота', 'error');
            }
        },

        async bookSlot(slotId) {
            if (!this.isAuthenticated) {
                this.$router.push('/login');
                return;
            }

            try {
                const response = await axios.post(`/api/main/book`, null, {
                    params: {
                        slotId: slotId,
                        clientId: this.client.id
                    }
                });

                const booking = response.data;

                this.$set(this.bookings, slotId, booking);

                this.showToast('Время успешно забронировано', 'success');
                await this.loadWeekSlots();
            } catch (error) {
                console.error('Ошибка при бронировании:', error);
                this.showToast('Ошибка при бронировании', 'error');
            }
        },

        async cancelBooking(bookingId) {
            try {
                await axios.delete(`/api/main/bookings/${bookingId}`);
                this.showToast('Бронирование отменено', 'success');
                await this.loadWeekSlots();
            } catch (error) {
                console.error('Ошибка при отмене бронирования:', error);
                this.showToast('Ошибка при отмене бронирования', 'error');
            }
        },

        showToast(text, type) {
            this.notificationText = text;
            this.notificationType = type;
            this.showNotification = true;
            setTimeout(() => {
                this.showNotification = false;
            }, 3000);
        },
        getSlotForTime(time, date) {
            const slots = this.timeSlots[date] || [];
            const foundSlot = slots.find(slot => slot.startTime.slice(0, 5) === time);
            return foundSlot;
        },
        navigateWeek(direction) {
            const firstDate = new Date(this.weekDates[0]);
            firstDate.setDate(firstDate.getDate() + (direction * 7));
            this.setCurrentWeek(firstDate);
        },
        formatDayDate(dateStr) {
            const date = new Date(dateStr);
            const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
            return `${days[date.getDay()]}, ${date.getDate()}`;
        },
        isToday(dateStr) {
            const today = this.formatDate(new Date());
            return dateStr === today;
        },
        isPastDate(dateStr) {
            const today = this.formatDate(new Date());
            return dateStr < today;
        }
    },
    template: `
        <div class="booking-container">
            <!-- Notification -->
            <div v-if="showNotification" 
                 :class="['notification', notificationType]">
                {{ notificationText }}
            </div>

            <!-- Week Navigation -->
            <div class="week-navigation">
                <button @click="navigateWeek(-1)" class="nav-btn">
                    <i class="fas fa-chevron-left"></i> Предыдущая неделя
                </button>
                <h2>{{ formatDayDate(weekDates[0]) }} - {{ formatDayDate(weekDates[6]) }}</h2>
                <button @click="navigateWeek(1)" class="nav-btn">
                    Следующая неделя <i class="fas fa-chevron-right"></i>
                </button>
            </div>

            <!-- Weekly Calendar -->
            <div class="weekly-calendar">
                <!-- Header with dates -->
                <div class="calendar-header">
                    <div class="time-column"></div>
                    <div v-for="date in weekDates" 
                         :key="date" 
                         :class="['date-column', { 
                             'today': isToday(date),
                             'past-date': isPastDate(date)
                         }]"
                    >
                        <div class="date-header">
                            {{ formatDayDate(date) }}
                            <button v-if="isAdmin && !isPastDate(date)" 
                                    @click="generateSlots(date)"
                                    class="generate-slots-btn"
                            >
                                Сгенерировать времена
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Time slots grid -->
                <div class="calendar-body">
                    <div v-for="time in timeIntervals" 
                         :key="time" 
                         class="time-row"
                    >
                        <div class="time-label">{{ time }}</div>
                        <div v-for="date in weekDates" 
                             :key="date"
                             class="slot-cell"
                        >
                            <div v-if="getSlotForTime(time, date)"
                                 :class="['time-slot', {
                                     'free': getSlotForTime(time, date).status === 'FREE',
                                     'booked': getSlotForTime(time, date).status === 'BOOKED',
                                     'blocked': getSlotForTime(time, date).status === 'ADMIN_BLOCKED'
                                 }]"
                            >
                                <div class="slot-content">
                                    <span class="slot-time">{{ time }}</span>
                                    <div class="slot-actions" v-if="!isPastDate(date)">
                                        <button v-if="isAdmin && getSlotForTime(time, date).status === 'FREE'"
                                                @click="blockSlot(getSlotForTime(time, date).id)"
                                                class="block-btn"
                                        >
                                            Блокировать
                                        </button>
                                        <button v-else-if="getSlotForTime(time, date).status === 'FREE' && 
                                                         isAuthenticated"
                                                @click="bookSlot(getSlotForTime(time, date).id)"
                                                class="book-btn"
                                        >
                                            Забронировать
                                        </button>
                                        <button v-else-if="getSlotForTime(time, date).status === 'BOOKED' && 
                                                         canCancelBooking(getSlotForTime(time, date))"
                                                @click="cancelBooking(bookings[getSlotForTime(time, date).id].id)"
                                                class="cancel-btn"
                                        >
                                            Отменить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/catalog', component: Catalog },
    { path: '/contacts', component: Contacts },
    { path: '/login', component: Auth },
    { path: '/profile', component: Profile },
    { path: '/booking', component: Booking }
];

const router = new VueRouter({
    routes
});

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

new Vue({
    el: '#app',
    router,
    data() {
        return {
            isAuthenticated: !!localStorage.getItem('jwtToken')
        };
    },
    methods: {
        updateAuthState() {
            this.isAuthenticated = !!localStorage.getItem('jwtToken');
        }
    },
});