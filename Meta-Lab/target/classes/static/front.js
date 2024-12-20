// Определение компонентов
const Home = {
    template: `
        <section>
            <h2>Добро пожаловать в MetaLaboratory</h2>
            <p>Описание главной страницы.</p>
        </section>
    `
};

const About = {
    template: `
        <section>
            <h2>О нас</h2>
            <p>История.</p>
        </section>
    `
};

const Catalog = {
    template: `
        <section>
            <h2>Каталог</h2>
            <p>Здесь будет каталог продуктов.</p>
        </section>
    `
};

const Contacts = {
    template: `
        <section>
            <h2>Контакты</h2>
            <p>Номера, карта, адреса и пр.</p>
        </section>
    `
};

// Компонент для входа и регистрации
const Auth = {
    data() {
        return {
            isLogin: true,  // Переключатель между логином и регистрацией
            name: '',
            password: '',
            confirmPassword: '', // Для регистрации
            errorMessage: '',
            successMessage: ''
        };
    },
    methods: {
        async login() {
            try {
                const params = new URLSearchParams();
                params.append('name', this.name);
                params.append('password', this.password);

                const response = await axios.post('/api/auth/login', params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

                if (response.status === 200) {
                    alert("Login successful!");
                    this.$router.push('/');
                }
            } catch (error) {
                console.log('Username:', this.name);
                console.log('Password:', this.password);
                if (error.response && error.response.status === 401) {
                    this.errorMessage = 'Неправильное имя пользователя или пароль';
                } else {
                    this.errorMessage = 'Произошла ошибка при попытке входа.';
                }
            }
        },

        async register() {
            if (this.password !== this.confirmPassword) {
                this.errorMessage = "Пароли не совпадают!";
                return;
            }

            try {
                const response = await axios.post('/api/auth/register', {
                    name: this.name,
                    password: this.password
                });
                this.successMessage = "Регистрация успешна! Вы можете войти.";
                this.errorMessage = '';
                this.isLogin = true;  // Переключаемся обратно на форму входа
            } catch (error) {
                this.errorMessage = 'Ошибка регистрации. Попробуйте еще раз.';
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
        <section>
            <h2 v-if="isLogin">Вход</h2>
            <h2 v-else>Регистрация</h2>

            <form @submit.prevent="isLogin ? login() : register()">
                <label for="name">Имя пользователя</label>
                <input type="text" v-model="name" required>

                <label for="password">Пароль</label>
                <input type="password" v-model="password" required>

                <label v-if="!isLogin" for="confirmPassword">Подтвердите пароль</label>
                <input v-if="!isLogin" type="password" v-model="confirmPassword" required>

                <button type="submit" v-if="isLogin">Войти</button>
                <button type="submit" v-else>Зарегистрироваться</button>
            </form>

            <p v-if="errorMessage" style="color:red">{{ errorMessage }}</p>
            <p v-if="successMessage" style="color:green">{{ successMessage }}</p>

            <p>
                <a href="#" @click.prevent="toggleForm">
                    {{ isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите' }}
                </a>
            </p>
        </section>
    `
};

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/catalog', component: Catalog },
    { path: '/contacts', component: Contacts },
    { path: '/login', component: Auth }
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router
});
