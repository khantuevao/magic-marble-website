var re=Object.defineProperty;var ie=(r,e,t)=>e in r?re(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var b=(r,e,t)=>(ie(r,typeof e!="symbol"?e+"":e,t),t);import{io as oe}from"https://cdn.socket.io/4.4.1/socket.io.esm.min.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();class le{constructor(){this.urls=["/","/home"]}onLoad(){}onRender(){return`
        <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div class="flex-1 h-full max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div class="flex flex-col overflow-y-auto">
                    <div class="flex items-center justify-center p-6 sm:p-12">
                        <div class="w-full">
                            <h1 class="mb-4 text-center text-4xl font-semibold text-gray-700 dark:text-gray-200">
                                Welcome to the MARBLES GAME
                            </h1>
                            <p class="mb-4 text-center text-sm text-gray-800 dark:text-gray-200">
                                The game is simple. You have 10 marbles. You can hide or guess.
                                If you are hider you can hide your marbles nunmber from 1-10.
                                If you are guesser you can guess the number of marbles hider has.
                                If you guess the number of marbles hider has you win.
                                If you guess wrong you lose.
                            </p>
                            <div class="flex gap-2 items-center justify-center">
                                <button class="w-1/2 px-4 py-2 mt-6 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                    onclick="ChangeUrl('/login')">
                                    Log in
                                </button>
                                <button class="w-1/2 px-4 py-2 mt-6 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                    onclick="ChangeUrl('/register')">
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `}}class de{constructor(){this.urls=["/login"]}async onLoad(){const e=await GetUser();e?(e.isAdmin&&ChangeUrl("/admin/dashboard"),e.isAdmin||ChangeUrl("/player/dashboard")):document.getElementById("loginBtn").addEventListener("click",async()=>{const t=document.getElementById("username").value,n=document.getElementById("password").value;await LoginUser(t,n)})}onRender(){return`
        <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div class="flex-1 h-full max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div class="flex flex-col overflow-y-auto">
                    <div class="flex items-center justify-center p-6 sm:p-12">
                        <div class="w-full">
                            <h1 class="mb-4 text-center text-4xl font-semibold text-gray-700 dark:text-gray-200">
                                Login
                            </h1>
                            <label class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Username</span>
                                <input
                                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder="someone" type="text" id="username" />
                            </label>
                            <label class="block mt-4 text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Password</span>
                                <input
                                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder="***************" type="password" id="password" />
                            </label>
                            <button id="loginBtn" class="block w-full px-4 py-2 mt-6 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                Log in
                            </button>

                            <p class="mt-4">
                                <button class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                                    onclick="ChangeUrl('/register')">
                                    Don't have an account? Register
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `}}class ce{constructor(){this.urls=["/register"]}async onLoad(){document.getElementById("registerBtn").addEventListener("click",async()=>{const e=document.getElementById("username").value,t=document.getElementById("password").value,n=document.getElementById("confirmPassword").value;await RegisterUser(e,t,n)})}onRender(){return`
        <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div class="flex-1 h-full max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div class="flex flex-col overflow-y-auto">
                    <div class="flex items-center justify-center p-6 sm:p-12">
                        <div class="w-full">
                            <h1 class="mb-4 text-4xl text-center font-semibold text-gray-700 dark:text-gray-200">
                                Register
                            </h1>
                            <label class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Username</span>
                                <input
                                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder="someone" type="text" id="username" />
                            </label>
                            <label class="block mt-4 text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Password</span>
                                <input
                                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder="***************" type="password" id="password" />
                            </label>
                            <label class="block mt-4 text-sm">
                                <span class="text-gray-700 dark:text-gray-400">
                                    Confirm password
                                </span>
                                <input
                                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder="***************" type="password" id="confirmPassword" />
                            </label>

                            <div class="flex mt-6 text-sm">
                                <label class="flex items-center dark:text-gray-400">
                                    <input type="checkbox"
                                        class="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray" />
                                    <span class="ml-2">
                                        I agree to the
                                        <span class="underline">privacy policy</span>
                                    </span>
                                </label>
                            </div>
                            <button
                                id="registerBtn" class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                Register
                            </button>

                            <p class="mt-4">
                                <button class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" 
                                onclick="ChangeUrl('/login')">
                                    Already have an account? Login
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `}}class ue{constructor(){}onLoad(){}onRender(){return`
        <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div class="flex-1 h-full max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div class="flex flex-col overflow-y-auto">
                    <div class="flex items-center justify-center p-6 sm:p-12">
                        <div class="w-full">
                            <h1 class="mb-4 text-center text-4xl font-semibold text-gray-700 dark:text-gray-200">
                                Error 404
                            </h1>
                            <p class="mb-4 text-center text-sm text-gray-800 dark:text-gray-200">
                                Page not found :(
                            </p>
                            <div class="flex gap-2 items-center justify-center">
                                <button class="w-1/2 px-4 py-2 mt-6 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                    onclick="ChangeUrl('/')">
                                    Go to home
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `}}class w{constructor(e){this.activeBtnName=e}onLoad(){}activeBtn(e,t,n){return`
        <span class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
            aria-hidden="true"></span>
        <button class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
            onclick="ChangeUrl('${n}')">
            <i class="ml-1 ${t}"></i>
            <span class="ml-4">${e}</span>
        </button>
        `}inactiveBtn(e,t,n){return`
        <button class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            onclick="ChangeUrl('${n}')">
            <i class="ml-1 ${t}"></i>
            <span class="ml-4">${e}</span>
        </button>
        `}onRender(){return`
        <aside class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0" >
            <div class="py-4 text-gray-500 dark:text-gray-400">
                <button id="username1" class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                    onclick="ChangeUrl('/player/dashboard')">
                    Player
                </button>
                <ul class="mt-6">
                    <li class="relative px-6 py-3">
                        ${this.activeBtnName=="Dashboard"?`${this.activeBtn("Dashboard","fas fa-house","/player/dashboard")}`:`${this.inactiveBtn("Dashboard","fas fa-house","/player/dashboard")}`}
                    </li>
                </ul>
                <ul>
                    <li class="relative px-6 py-3">
                        ${this.activeBtnName=="Tournaments"?`
                                <span class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                                aria-hidden="true"></span>
                                <button class="inline-flex items-center justify-between w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                                `:`
                                <button class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                                `}
                            @click="togglePagesMenu" aria-haspopup="true">
                        <span class="inline-flex items-center">
                            <i class="ml-1 fa-solid fa-trophy"></i>
                            <span class="ml-4">Tournaments</span>
                        </span>
                        <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <template x-if="isPagesMenuOpen">
                        <ul x-transition:enter="transition-all ease-in-out duration-300"
                            x-transition:enter-start="opacity-25 max-h-0" x-transition:enter-end="opacity-100 max-h-xl"
                            x-transition:leave="transition-all ease-in-out duration-300"
                            x-transition:leave-start="opacity-100 max-h-xl" x-transition:leave-end="opacity-0 max-h-0"
                            class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                            aria-label="submenu">
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/player/tournaments/all')">
                                    All
                                </button>
                            </li>
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/player/tournaments/joined')">
                                    Joined
                                </button>
                            </li>
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/player/tournaments/live')">
                                    Live
                                </button>
                            </li>
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/player/tournaments/played')">
                                    Played
                                </button>
                            </li>
                        </ul>
                    </template>
                </li>
                <li class="relative px-6 py-3">
                    ${this.activeBtnName=="Profile"?`${this.activeBtn("Profile","fas fa-user","/player/profile")}`:`${this.inactiveBtn("Profile","fas fa-user","/player/profile")}`}
                </li>
                <li class="relative px-6 py-3">
                    ${this.activeBtnName=="Setting"?`${this.activeBtn("Setting","fas fa-cog","/player/setting")}`:`${this.inactiveBtn("Setting","fas fa-cog","/player/setting")}`}
                </li>
                <li class="relative px-6 py-3">
                    <button
                        class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                        onclick="Logout()">
                        <i class="ml-1 fa-solid fa-sign-out"></i>
                        <span class="ml-4">Logout</span>
                    </button>
                </li>
            </ul>
        </div >
    </aside >
    <div x-show="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
    x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
    x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
    x-transition:leave-end="opacity-0"
    class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div>
    <aside class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
    x-show="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
    x-transition:enter-start="opacity-0 transform -translate-x-20" x-transition:enter-end="opacity-100"
    x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
    x-transition:leave-end="opacity-0 transform -translate-x-20" @click.away="closeSideMenu"
        @keydown.escape="closeSideMenu" >
            <div class="py-4 text-gray-500 dark:text-gray-400">
                <button id="username2" class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                    onclick="ChangeUrl('/player/dashboard')">
                    Player
                </button>
                <ul class="mt-6">
                    <li class="relative px-6 py-3">
                        ${this.activeBtnName=="Dashboard"?`${this.activeBtn("Dashboard","fas fa-house","/player/dashboard")}`:`${this.inactiveBtn("Dashboard","fas fa-house","/player/dashboard")}`}
                    </li>
                </ul>
                <ul>
                    <li class="relative px-6 py-3">
                        ${this.activeBtnName=="Tournaments"?`
                    <span class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"></span>
                    <button class="inline-flex items-center justify-between w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                    `:`
                    <button class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    `}
                @click="togglePagesMenu" aria-haspopup="true">
                        <span class="inline-flex items-center">
                            <i class="ml-1 fa-solid fa-trophy"></i>
                            <span class="ml-4">Tournaments</span>
                        </span>
                        <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <template x-if="isPagesMenuOpen">
                        <ul x-transition:enter="transition-all ease-in-out duration-300"
                            x-transition:enter-start="opacity-25 max-h-0" x-transition:enter-end="opacity-100 max-h-xl"
                            x-transition:leave="transition-all ease-in-out duration-300"
                            x-transition:leave-start="opacity-100 max-h-xl" x-transition:leave-end="opacity-0 max-h-0"
                            class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                            aria-label="submenu">
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/player/tournaments/all')">
                                    All
                                </button>
                            </li>
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/player/tournaments/joined')">
                                    Joined
                                </button>
                            </li>
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/player/tournaments/live')">
                                    Live
                                </button>
                            </li>
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/player/tournaments/played')">
                                    Played
                                </button>
                            </li>
                        </ul>
                    </template>
                </li>
                <li class="relative px-6 py-3">
                    ${this.activeBtnName=="Profile"?`${this.activeBtn("Profile","fas fa-user","/player/profile")}`:`${this.inactiveBtn("Profile","fas fa-user","/player/profile")}`}
                </li>
                <li class="relative px-6 py-3">
                    ${this.activeBtnName=="Setting"?`${this.activeBtn("Setting","fas fa-cog","/player/setting")}`:`${this.inactiveBtn("Setting","fas fa-cog","/player/setting")}`}
                </li>
                <li class="relative px-6 py-3">
                    <button
                        class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                        onclick="Logout()">
                        <i class="ml-1 fa-solid fa-sign-out"></i>
                        <span class="ml-4">Logout</span>
                    </button>
                </li>
            </ul>
        </div>
    </aside>
            `}}class m{constructor(){}onLoad(){}onRender(){return`
        <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
            <div
                class="container py-2 flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                <button class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
        @click="toggleSideMenu" aria-label="Menu">
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
            <div class="lg:mr-32"></div>
            <ul class="flex items-center flex-shrink-0 space-x-6">
                <li class="relative">
                    <h1 id="status"></h1>
                </li>
                <li class="flex">
                    <button class="rounded-md focus:outline-none focus:shadow-outline-purple" @click="toggleTheme"
            aria-label="Toggle color mode">
                    <template x-if="!dark">
                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                    </template>
                    <template x-if="dark">
                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </template>
                </button>
            </li>
            <li class="relative">
                <button onclick="Logout()"
                    class="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                        </path>
                    </svg>
                </button>
            </li>
        </ul>
        </div >
  </header >`}}class me{constructor(){this.urls=["/player/dashboard"],this.sidebar=new w("Dashboard"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();if(e&&!e.isAdmin){document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username;const n=await(await fetch(`${API_URL}/getPlayerDashboardData/?userId=${e.id}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();n.error||(document.getElementById("playedTournaments").innerHTML=n.playedTournaments,document.getElementById("wonTournaments").innerHTML=n.wonTournaments,document.getElementById("joinedTournaments").innerHTML=n.joinedTournaments,document.getElementById("liveTournaments").innerHTML=n.liveTournaments)}else ChangeUrl("/login")}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
                <main class="h-full overflow-y-auto">
                    <div class="container px-6 mx-auto grid">
                        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Dashboard
                        </h2>
                        <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Played Tournaments
                                    </p>
                                    <p id="playedTournaments" class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                        0
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                        <path fill-rule="evenodd"
                                            d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Won Tournaments
                                    </p>
                                    <p id="wonTournaments" class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                        0
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                        <path
                                            d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Joined Tournaments
                                    </p>
                                    <p id="joinedTournaments" class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                        0
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                        <path fill-rule="evenodd"
                                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Your Live Tournaments
                                    </p>
                                    <p id="liveTournaments" class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                        0
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                            How it works?
                        </h4>
                        <div class="grid gap-6 mb-8 md:grid-cols-2">
                            <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                <h4 class="font-semibold text-gray-600 dark:text-gray-300">
                                    Tournaments
                                </h4>
                                <p class="text-gray-600 dark:text-gray-400">
                                    Tournaments are a great way to play with friends and compete with other players.
                                    For now you can only join tournaments that are created by admin.
                                    We are working on a feature to create your own tournaments.
                                    Join a tournament and play with your friends.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
        `}}class pe{constructor(){this.urls=["/player/profile"],this.sidebar=new w("Profile"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();e&&!e.isAdmin?(document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username,document.getElementById("username").value=e.username):ChangeUrl("/login")}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
                <main class="h-full overflow-y-auto">
                    <div class="container px-6 mx-auto grid">
                        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Profile
                        </h2>
                        <div class="px-4 py-3 mb-4 bg-red-300 rounded-lg shadow-md dark:bg-red-500">
                            <p class="text-sm text-gray-700 dark:text-white">
                                Do not share your personal information with anyone.
                            </p>
                        </div>
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <label class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Username</span>
                                <input id="username"
                                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    value="someone" disabled />
                            </label>
                            <label class="block mt-2 text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Password</span>
                                <input
                                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    value="**************" type="password" disabled />
                            </label>

                            <div class="mt-4 text-sm">
                                <span class="text-gray-700 dark:text-gray-400">
                                    Role
                                </span>
                                <div class="mt-2">
                                    <label class="inline-flex items-center text-gray-600 dark:text-gray-400">
                                        <input type="radio"
                                            class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                            name="accountType" value="personal" disabled />
                                        <span class="ml-2">Admin</span>
                                    </label>
                                    <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
                                        <input type="radio"
                                            class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                            name="accountType" value="busines" checked disabled />
                                        <span class="ml-2">Player</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
        `}}class ge{constructor(){this.urls=["/player/setting"],this.sidebar=new w("Setting"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();e&&!e.isAdmin?(document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username,document.getElementById("username").value=e.username,document.getElementById("updateBtn").addEventListener("click",async()=>{const t=document.getElementById("username").value;await UpdateUser(t)})):ChangeUrl("/login")}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
                <main class="h-full overflow-y-auto">
                    <div class="container px-6 mx-auto grid">
                        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Setting
                        </h2>
                        <div class="px-4 py-3 mb-4 bg-red-300 rounded-lg shadow-md dark:bg-red-500">
                            <p class="text-sm text-gray-700 dark:text-white">
                                You can not change your role.
                            </p>
                        </div>
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <label class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Username</span>
                                <input id="username"
                                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    value="someone" />
                            </label>
                            <div class="mt-4 text-sm">
                                <span class="text-gray-700 dark:text-gray-400">
                                    Role
                                </span>
                                <div class="mt-2">
                                    <label class="inline-flex items-center text-gray-600 dark:text-gray-400">
                                        <input type="radio"
                                            class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                            name="accountType" value="personal" disabled />
                                        <span class="ml-2">Admin</span>
                                    </label>
                                    <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
                                        <input type="radio"
                                            class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                            name="accountType" value="busines" checked disabled />
                                        <span class="ml-2">Player</span>
                                    </label>
                                </div>
                            </div>
                            <div class="flex justify-end mt-6">
                                <button id="updateBtn"
                                    class="mx-2 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                    Update
                                </button>
                                <button onclick="ChangeUrl('/player/setting')"
                                    class="mx-2 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-transparent border border-purple-600 rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                    Cancel
                                </button>
                            </div>
                        </div>
                        <div class="px-4 py-3 mb-4 bg-yellow-300 rounded-lg shadow-md dark:bg-yellow-400">
                            <p class="text-sm text-gray-400 dark:text-black">
                                You will not able to create account again on this username.
                            </p>
                        </div>
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Are you want to delete your account?</span>
                                <button type="button" onclick="DeleteUser()"
                                    class="mx-2 px-4 py-2 text-sm font-medium leading-5 text-black dark:text-white transition-colors duration-150 bg-transparent border border-red-600 rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
        `}}class ye{constructor(){this.urls=["/player/tournaments/all"],this.sidebar=new w("Tournaments"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();e&&!e.isAdmin?(document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username,await this.loadTournaments(e.id,"upcomingTournaments","upcoming"),await this.loadTournaments(e.id,"liveTournaments","live")):ChangeUrl("/login")}async loadTournaments(e,t,n){const i=await(await fetch(`${API_URL}/getTournamentsForPlayer/?userId=${e}&status=${n}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();if(!i.error){const o=i.tournaments,s=document.getElementById(t);s.innerHTML="",o.length>0?o.forEach(c=>{s.innerHTML+=`
                <div class="bg-gray-100 dark:bg-gray-900 my-2 rounded w-64 flex-shrink-0">
                    <div class="relative flex flex-col p-4">
                        <p class="mb-2 text-xl font-medium text-gray-700 dark:text-gray-500">
                            ${c.name}
                        </p>
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            ${c.description}
                        </p>
                        <p class="text-xs font-semibold text-gray-500 dark:text-gray-400">
                            <i class="fa-solid fa-users"></i> ${c.playersArr.length}/${c.maxPlayers}
                        </p>
                        <p class="text-xs mt-1 font-semibold text-gray-500 dark:text-gray-400">
                            <i class="fa-solid ${n=="upcmoing"?"fa-hourglass-start":"fa-check"}"></i> ${new Date(c.startDateTime).toLocaleDateString()} ${new Date(c.startDateTime).toLocaleTimeString()}
                        </p>
                        <p class="text-xs mt-1 font-semibold text-red-500 dark:text-red-400">
                            ${DateToAgo(new Date(c.startDateTime))}
                        </p>
                        <div class="grid grid-cols-2 gap-2">
                            <button onclick="ChangeUrl('/player/tournaments/view?id=${c.id}')"
                                class="px-6 py-2 w-fit mt-4 text-sm font-medium leading-5 text-green-500 dark:text-green-600 transition-colors duration-150 bg-green-100 dark:bg-transparent border border-transparent dark:border-green-600 rounded-lg active:bg-green-600 hover:bg-green-700 hover:text-white dark:hover:bg-green-700 dark:hover:text-white focus:outline-none focus:shadow-outline-green">
                                View
                            </button>
                            ${n==="upcoming"?`<button onclick="JoinTournament('${c.id}','/player/tournaments/all')"
                                class="px-6 py-2 mt-4 text-sm font-medium leading-5 text-indigo-500 dark:text-indigo-600 transition-colors duration-150 bg-indigo-100 dark:bg-transparent border border-transparent dark:border-indigo-600 rounded-lg active:bg-indigo-600 hover:bg-indigo-700 hover:text-white dark:hover:bg-indigo-700 dark:hover:text-white focus:outline-none focus:shadow-outline-indigo">
                                Join
                            </button>`:""}
                        </div>
                    </div>
                </div>
                `}):s.innerHTML=`
                <p class="text-center px-2 py-2 text-sm text-gray-700 dark:text-gray-400">
                    No Data To Show
                </p>
            `}}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
            ${this.navbar.onRender()}
            <main class="h-full overflow-y-auto">
                <div class="container px-6 mx-auto grid">
                    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        All Tournaments
                    </h2>
                    <div
                        class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-orange-600 bg-orange-100 rounded-lg shadow-md focus:outline-none focus:shadow-outline-orange">
                        <div class="flex items-center">
                            <span>You can browse any tournament</span>
                        </div>
                    </div>
                    <div class="px-4 py-3 mb-8 bg-white rounded-lg overflow-auto shadow-md dark:bg-gray-800">
                        <div class="w-full overflow-x-auto mb-4">
                            <h4 class="font-semibold text-gray-600 dark:text-gray-300">
                                <i class="fa-solid fa-circle text-green-600"></i> Upcoming Tournaments
                            </h4>
                            <div id="upcomingTournaments" class="flex items-center space-x-6 overflow-x-auto">

                            </div>
                        </div>
                        <div class="w-full overflow-x-auto mb-4">
                            <h4 class="font-semibold text-gray-600 dark:text-gray-300">
                                <i class="fa-solid fa-circle text-red-600"></i> Live Tournaments
                            </h4>
                            <div id="liveTournaments" class="flex items-center space-x-6 overflow-x-auto">

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div >
    </div >
            `}}class he{constructor(){this.urls=["/player/tournaments/joined"],this.sidebar=new w("Tournaments"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();e&&!e.isAdmin?(document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username,await this.loadTournaments(e.id,"tournamentsTable")):ChangeUrl("/login")}async loadTournaments(e,t){const a=await(await fetch(`${API_URL}/getPlayerTournaments/?userId=${e}&status=upcoming`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();if(!a.error){const i=a.tournaments,o=document.getElementById(t);o.innerHTML="",i.length>0?i.forEach(s=>{o.innerHTML+=`
                <tr class="text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                            <div>
                                <p class="font-semibold">${s.name}</p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        <p class="font-semibold">${s.playersArr.length}</p>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        <p class="font-semibold">${s.maxPlayers}</p>
                    </td>
                    <td class="px-4 py-3 text-xs">
                            ${new Date(s.startDateTime)>new Date?'<span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm dark:bg-green-700 dark:text-green-100">Upcoming</span>':'<span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm dark:bg-red-700 dark:text-red-100">Not Started</span>'}
                        </td>
                    <td class="px-4 py-3 text-sm">
                        <p class="font-semibold">${new Date(s.startDateTime).toLocaleDateString()}</p>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        <p class="font-semibold">${new Date(s.startDateTime).toLocaleTimeString()}</p>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        <div class="flex items-center space-x-4 text-sm">
                            <button onclick="ChangeUrl('/player/tournaments/view?id=${s.id}')"
                                class="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded dark:bg-yellow-700 dark:text-yellow-100">
                                View
                            </button>
                            <button onclick="LeaveTournament('${s.id}','/player/tournaments/joined')"
                                class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded dark:bg-green-700 dark:text-green-100">
                                Leave
                            </button>
                        </div>
                    </td>
                </tr>
                `}):o.innerHTML=`
                <tr class="text-gray-700 dark:text-gray-400">
                    <td colspan="6" class="text-center px-4 py-3">No Joined tournaments</td>
                </tr>
            `}}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
                <main class="h-full overflow-y-auto">
                    <div class="container px-6 mx-auto grid">
                        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Joined Tournaments
                        </h2>
                        <div
                            class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-orange-600 bg-orange-100 rounded-lg shadow-md focus:outline-none focus:shadow-outline-orange">
                            <div class="flex items-center">
                                <span>You can leave any tournament</span>
                            </div>
                        </div>
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg overflow-auto shadow-md dark:bg-gray-800">
                            <div class="w-full overflow-x-auto">
                                <h4 class="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                                    These all are tournaments that you joined.
                                </h4>
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-3">Name</th>
                                            <th class="px-4 py-3">Current Players</th>
                                            <th class="px-4 py-3">Max Players</th>
                                            <th class="px-4 py-3">Status</th>
                                            <th class="px-4 py-3">Date</th>
                                            <th class="px-4 py-3">Time</th>
                                            <th class="px-4 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tournamentsTable"
                                        class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
        `}}class xe{constructor(){this.urls=["/player/tournaments/live"],this.sidebar=new w("Tournaments"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();e&&!e.isAdmin?(document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username,await this.loadTournaments(e.id,"tournamentsTable")):ChangeUrl("/login")}async loadTournaments(e,t){const a=await(await fetch(`${API_URL}/getPlayerTournaments/?userId=${e}&status=live`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();if(!a.error){const i=a.tournaments,o=document.getElementById(t);o.innerHTML="",i.length>0?i.forEach(s=>{o.innerHTML+=`
                    <tr class="text-gray-700 dark:text-gray-400">
                        <td class="px-4 py-3">
                            <div class="flex items-center text-sm">
                                <div>
                                    <p class="font-semibold">${s.name}</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${s.playersArr.length}</p>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${s.maxPlayers}</p>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${new Date(s.startDateTime).toLocaleDateString()}</p>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${new Date(s.startDateTime).toLocaleTimeString()}</p>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <div class="flex items-center space-x-4 text-sm">
                                <button onclick="ChangeUrl('/player/tournaments/view?id=${s.id}')"
                                    class="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded dark:bg-yellow-700 dark:text-yellow-100">
                                    View
                                </button>
                                <button onclick="ChangeUrl('/games/marblesgame?id=${s.id}')"
                                    class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded dark:bg-green-700 dark:text-green-100">
                                    Play
                                </button>
                            </div>
                        </td>
                    </tr>
                    `}):o.innerHTML=`
                    <tr class="text-gray-700 dark:text-gray-400">
                        <td colspan="6" class="text-center px-4 py-3">No Live tournaments</td>
                    </tr>
                `}}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
                <main class="h-full overflow-y-auto">
                    <div class="container px-6 mx-auto grid">
                        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Live Tournaments
                        </h2>
                        <div
                            class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-green-600 bg-green-100 rounded-lg shadow-md focus:outline-none focus:shadow-outline-green">
                            <div class="flex items-center">
                                <span>Your joined tournaments.</span>
                            </div>
                        </div>
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg overflow-auto shadow-md dark:bg-gray-800">
                            <div class="w-full overflow-x-auto">
                                <h4 class="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                                    These all are tournaments are live now.
                                </h4>
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-3">Name</th>
                                            <th class="px-4 py-3">Current Players</th>
                                            <th class="px-4 py-3">Max Players</th>
                                            <th class="px-4 py-3">Date</th>
                                            <th class="px-4 py-3">Time</th>
                                            <th class="px-4 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tournamentsTable"
                                        class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
        `}}class be{constructor(){this.urls=["/player/tournaments/played"],this.sidebar=new w("Tournaments"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();e&&!e.isAdmin?(document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username,await this.loadTournaments(e.id,"tournamentsTable")):ChangeUrl("/login")}async loadTournaments(e,t){const a=await(await fetch(`${API_URL}/getPlayerTournaments/?userId=${e}&status=finished`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();if(!a.error){const i=a.tournaments,o=document.getElementById(t);o.innerHTML="",i.length>0?i.forEach(s=>{o.innerHTML+=`
                <tr class="text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                            <div>
                                <p class="font-semibold">${s.name}</p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        <p class="font-semibold">${s.winner}</p>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        <p class="font-semibold">${s.maxPlayers}</p>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        <p class="font-semibold">${new Date(s.startDateTime).toLocaleDateString()} ${new Date(s.startDateTime).toLocaleTimeString()}</p>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        <p class="font-semibold">${new Date(s.endDateTime).toLocaleDateString()} ${new Date(s.endDateTime).toLocaleTimeString()}</p>
                    </td>
                </tr>
                `}):o.innerHTML=`
                <tr class="text-gray-700 dark:text-gray-400">
                    <td colspan="6" class="text-center px-4 py-3">No played tournaments</td>
                </tr>
            `}}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
                <main class="h-full overflow-y-auto">
                    <div class="container px-6 mx-auto grid">
                        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Played Tournaments
                        </h2>
                        <div
                            class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-gray-600 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:shadow-outline-gray">
                            <div class="flex items-center">
                                <span>These tournaments are closed now.</span>
                            </div>
                        </div>
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg overflow-auto shadow-md dark:bg-gray-800">
                            <div class="w-full overflow-x-auto">
                                <h4 class="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                                    These all are tournaments you already played.
                                </h4>
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-3">Name</th>
                                            <th class="px-4 py-3">Winner</th>
                                            <th class="px-4 py-3">Max Players</th>
                                            <th class="px-4 py-3">Start At</th>
                                            <th class="px-4 py-3">Finish At</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tournamentsTable"
                                        class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
        `}}class ve{constructor(){this.urls=["/player/tournaments/view"],this.sidebar=new w("Tournaments"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();if(e&&!e.isAdmin)if(document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username,window.location.href.split("?")[1]){let t=window.location.href.split("?")[1].split("=")[1];t?await this.loadTournament(t):ChangeUrl("/player/dashboard")}else ChangeUrl("/player/dashboard");else ChangeUrl("/login")}async loadTournament(e){const n=await(await fetch(`${API_URL}/getTournament/?tournamentId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();if(n.error)ChangeUrl("/player/dashboard");else{const a=n.tournament;if(document.getElementById("name").innerHTML=a.name,document.getElementById("description").innerHTML=a.description,document.getElementById("rules").innerHTML=a.rules,document.getElementById("currentPlayers").innerHTML=a.playersArr.length,document.getElementById("maxPlayers").innerHTML=a.maxPlayers,document.getElementById("create").innerHTML=`${new Date(a.createDateTime).toLocaleDateString()} - ${new Date(a.createDateTime).toLocaleTimeString()}`,document.getElementById("start").innerHTML=`${new Date(a.startDateTime).toLocaleDateString()} - ${new Date(a.startDateTime).toLocaleTimeString()}`,document.getElementById("prizeDetails").innerHTML=a.prizeAndDistribution,a.optionalLink){const i=document.getElementById("link");i.innerHTML=a.optionalLink,i.setAttribute("href",a.optionalLink)}else document.getElementById("link").innerHTML="No Link",link.setAttribute("href","")}}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
                <main class="h-full overflow-y-auto">
                    <div class="container px-6 mx-auto grid">
                        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            View Tournament
                        </h2>
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg overflow-auto shadow-md dark:bg-gray-800">
                            <div class="w-full overflow-x-auto">
                                <h4 class="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                                    These all are the Tournament details.
                                </h4>
                                <div class="grid grid-cols-1 gap-6 mt-4">
                                    <div class="flex flex-col p-4 bg-white rounded-lg dark:bg-gray-800">
                                        <div class="grid md:grid-cols-2 justify-between mt-4">
                                            <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                                                Name
                                            </span>
                                            <span id="name"
                                                class="px-2 py-1 font-semibold text-gray-500 bg-gray-200 rounded shadow dark:bg-gray-600 dark:text-gray-200">
                                                Lorem ipsum dolor sit amet
                                            </span>
                                        </div>
                                        <div class="grid md:grid-cols-2 justify-between mt-4">
                                            <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                                                Rules
                                            </span>
                                            <span id="rules"
                                                class="px-2 py-1 font-semibold text-gray-500 bg-gray-200 rounded shadow dark:bg-gray-600 dark:text-gray-200">
                                                Lorem ipsum dolor sit amet,
                                            </span>
                                        </div>
                                        <div class="grid md:grid-cols-2 justify-between mt-4">
                                            <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                                                Description
                                            </span>
                                            <span id="description"
                                                class="px-2 py-1 font-semibold text-gray-500 bg-gray-200 rounded shadow dark:bg-gray-600 dark:text-gray-200">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quia
                                                consequuntur quos ipsum!
                                                Nesciunt accusamus quidem hic, fugiat quasi facere commodi inventore quo,
                                                recusandae, laudantium
                                                assumenda perferendis dolorum optio. Nobis.
                                            </span>
                                        </div>

                                        <div class="grid md:grid-cols-2 justify-between mt-4">
                                            <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                                                Current Players
                                            </span>
                                            <span
                                                class="px-2 py-1 font-semibold text-gray-500 bg-gray-200 rounded shadow dark:bg-gray-600 dark:text-gray-200">
                                                <li class="fas fa-users mr-2"></li><span id="currentPlayers">20</span>
                                            </span>
                                        </div>
                                        <div class="grid md:grid-cols-2 justify-between mt-4">
                                            <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                                                Max Players
                                            </span>
                                            <span
                                                class="px-2 py-1 font-semibold text-gray-500 bg-gray-200 rounded shadow dark:bg-gray-600 dark:text-gray-200">
                                                <i class="fa-solid fa-bullseye mr-2"></i><span id="maxPlayers">32</span>
                                            </span>
                                        </div>
                                        <div class="grid md:grid-cols-2 justify-between mt-4">
                                            <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                                                Prize and distribution
                                            </span>
                                            <span id="prizeDetails"
                                                class="px-2 py-1 font-semibold text-gray-500 bg-gray-200 rounded shadow dark:bg-gray-600 dark:text-gray-200">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quia
                                                consequuntur quos ipsum!
                                                Nesciunt accusamus quidem hic, fugiat quasi facere commodi inventore quo,
                                                recusandae, laudantium
                                                assumenda perferendis dolorum optio. Nobis.
                                            </span>
                                        </div>
                                        <div class="grid md:grid-cols-2 justify-between mt-4">
                                            <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                                                Create At
                                            </span>
                                            <span
                                                class="px-2 py-1 font-semibold text-gray-500 bg-gray-200 rounded shadow dark:bg-gray-600 dark:text-gray-200">
                                                <li class="fas fa-clock mr-2"></li><span id="create">2020/10/20 - 10:00
                                                    PM</span>
                                            </span>
                                        </div>
                                        <div class="grid md:grid-cols-2 justify-between mt-4">
                                            <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                                                Start At
                                            </span>
                                            <span
                                                class="px-2 py-1 font-semibold text-gray-500 bg-gray-200 rounded shadow dark:bg-gray-600 dark:text-gray-200">
                                                <li class="fas fa-hourglass-start mr-2"></li><span id="start">2020/10/20 -
                                                    10:00 PM</span>
                                            </span>
                                        </div>
                                        <a id="link" class="mt-2 text-blue-700 dark:text-blue-600"
                                            href="www.google.com">www.google.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
        `}}class v{constructor(e){this.activeBtnName=e}onLoad(){}activeBtn(e,t,n){return`
        <span class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
            aria-hidden="true"></span>
        <button class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
            onclick="ChangeUrl('${n}')">
            <i class="ml-1 ${t}"></i>
            <span class="ml-4">${e}</span>
        </button>
        `}inactiveBtn(e,t,n){return`
        <button class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            onclick="ChangeUrl('${n}')">
            <i class="ml-1 ${t}"></i>
            <span class="ml-4">${e}</span>
        </button>
        `}onRender(){return`
        <aside class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0" >
            <div class="py-4 text-gray-500 dark:text-gray-400">
                <button id="username1" class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                    onclick="ChangeUrl('/admin/dashboard')">
                    Admin
                </button>
                <ul class="mt-6">
                    <li class="relative px-6 py-3">
                        ${this.activeBtnName=="Dashboard"?`${this.activeBtn("Dashboard","fas fa-house","/admin/dashboard")}`:`${this.inactiveBtn("Dashboard","fas fa-house","/admin/dashboard")}`}
                    </li>
                </ul>
                <ul>
                    <li class="relative px-6 py-3">
                        ${this.activeBtnName=="Tournaments"?`
                                <span class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                                aria-hidden="true"></span>
                                <button class="inline-flex items-center justify-between w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                                `:`
                                <button class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                                `}
                            @click="togglePagesMenu" aria-haspopup="true">
                        <span class="inline-flex items-center">
                            <i class="ml-1 fa-solid fa-trophy"></i>
                            <span class="ml-4">Tournaments</span>
                        </span>
                        <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <template x-if="isPagesMenuOpen">
                        <ul x-transition:enter="transition-all ease-in-out duration-300"
                            x-transition:enter-start="opacity-25 max-h-0" x-transition:enter-end="opacity-100 max-h-xl"
                            x-transition:leave="transition-all ease-in-out duration-300"
                            x-transition:leave-start="opacity-100 max-h-xl" x-transition:leave-end="opacity-0 max-h-0"
                            class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                            aria-label="submenu">
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/admin/tournaments/create')">
                                    Create
                                </button>
                            </li>
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/admin/tournaments/upcoming')">
                                    Upcoming
                                </button>
                            </li>
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/admin/tournaments/live')">
                                    Live
                                </button>
                            </li>
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/admin/tournaments/finished')">
                                    Finished
                                </button>
                            </li>
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/admin/tournaments/deleted')">
                                    Deleted
                                </button>
                            </li>
                        </ul>
                    </template>
                </li>
                <li class="relative px-6 py-3">
                    ${this.activeBtnName=="Players"?`${this.activeBtn("Players","fas fa-users","/admin/players")}`:`${this.inactiveBtn("Players","fas fa-users","/admin/players")}`}
                </li>
                <li class="relative px-6 py-3">
                    ${this.activeBtnName=="Profile"?`${this.activeBtn("Profile","fas fa-user","/admin/profile")}`:`${this.inactiveBtn("Profile","fas fa-user","/admin/profile")}`}
                </li>
                <li class="relative px-6 py-3">
                    ${this.activeBtnName=="Setting"?`${this.activeBtn("Setting","fas fa-cog","/admin/setting")}`:`${this.inactiveBtn("Setting","fas fa-cog","/admin/setting")}`}
                </li>
                <li class="relative px-6 py-3">
                    <button
                        class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                        onclick="Logout()">
                        <i class="ml-1 fa-solid fa-sign-out"></i>
                        <span class="ml-4">Logout</span>
                    </button>
                </li>
            </ul>
        </div >
    </aside >
    <div x-show="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
    x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
    x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
    x-transition:leave-end="opacity-0"
    class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div>
    <aside class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
    x-show="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
    x-transition:enter-start="opacity-0 transform -translate-x-20" x-transition:enter-end="opacity-100"
    x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
    x-transition:leave-end="opacity-0 transform -translate-x-20" @click.away="closeSideMenu"
        @keydown.escape="closeSideMenu" >
            <div class="py-4 text-gray-500 dark:text-gray-400">
                <button id="username2" class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                    onclick="ChangeUrl('/admin/dashboard')">
                    Admin
                </button>
                <ul class="mt-6">
                    <li class="relative px-6 py-3">
                        ${this.activeBtnName=="Dashboard"?`${this.activeBtn("Dashboard","fas fa-house","/admin/dashboard")}`:`${this.inactiveBtn("Dashboard","fas fa-house","/admin/dashboard")}`}
                    </li>
                </ul>
                <ul>
                    <li class="relative px-6 py-3">
                        ${this.activeBtnName=="Tournaments"?`
                        <span class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                        aria-hidden="true"></span>
                        <button class="inline-flex items-center justify-between w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                        `:`
                        <button class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                        `}
                    @click="togglePagesMenu" aria-haspopup="true">
                        <span class="inline-flex items-center">
                            <i class="ml-1 fa-solid fa-trophy"></i>
                            <span class="ml-4">Tournaments</span>
                        </span>
                        <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <template x-if="isPagesMenuOpen">
                        <ul x-transition:enter="transition-all ease-in-out duration-300"
                            x-transition:enter-start="opacity-25 max-h-0" x-transition:enter-end="opacity-100 max-h-xl"
                            x-transition:leave="transition-all ease-in-out duration-300"
                            x-transition:leave-start="opacity-100 max-h-xl" x-transition:leave-end="opacity-0 max-h-0"
                            class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                            aria-label="submenu">
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/admin/tournaments/create')">
                                    Create
                                </button>
                            </li>
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/admin/tournaments/upcoming')">
                                    Upcoming
                                </button>
                            </li>
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/admin/tournaments/live')">
                                    Live
                                </button>
                            </li>
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/admin/tournaments/finished')">
                                    Finished
                                </button>
                            </li>
                            <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <button onclick="ChangeUrl('/admin/tournaments/deleted')">
                                    Deleted
                                </button>
                            </li>
                        </ul>
                    </template>
                </li>
                <li class="relative px-6 py-3">
                    ${this.activeBtnName=="Players"?`${this.activeBtn("Players","fas fa-users","/admin/players")}`:`${this.inactiveBtn("Players","fas fa-users","/admin/players")}`}
                </li>
                <li class="relative px-6 py-3">
                    ${this.activeBtnName=="Profile"?`${this.activeBtn("Profile","fas fa-user","/admin/profile")}`:`${this.inactiveBtn("Profile","fas fa-user","/admin/profile")}`}
                </li>
                <li class="relative px-6 py-3">
                    ${this.activeBtnName=="Setting"?`${this.activeBtn("Setting","fas fa-cog","/admin/setting")}`:`${this.inactiveBtn("Setting","fas fa-cog","/admin/setting")}`}
                </li>
                <li class="relative px-6 py-3">
                    <button
                        class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                        onclick="Logout()">
                        <i class="ml-1 fa-solid fa-sign-out"></i>
                        <span class="ml-4">Logout</span>
                    </button>
                </li>
            </ul>
        </div>
    </aside>
            `}}class fe{constructor(){this.urls=["/admin/dashboard"],this.sidebar=new v("Dashboard"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();if(e&&e.isAdmin){document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username;const n=await(await fetch(`${API_URL}/getAdminDashboardData/?userId=${e.id}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();n.error||(document.getElementById("totalPlayers").innerHTML=n.totalPlayers,document.getElementById("upcomingTournaments").innerHTML=n.upcomingTournaments,document.getElementById("liveTournaments").innerHTML=n.liveTournaments,document.getElementById("finishedTournaments").innerHTML=n.finishedTournaments)}else ChangeUrl("/login")}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
                <main class="h-full overflow-y-auto">
                    <div class="container px-6 mx-auto grid">
                        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Dashboard
                        </h2>
                        <a class="cusor-pointer flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
                            onclick="ChangeUrl('/admin/tournaments/live')">
                            <div class="flex items-center">
                                <i class="fa-solid fa-globe mr-3"></i>
                                <span>Some Tournaments are Live Now</span>
                            </div>
                            <span>See more &RightArrow;</span>
                        </a>
                        <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Total Players
                                    </p>
                                    <p id="totalPlayers" class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                        0
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Upcoming Tournaments
                                    </p>
                                    <p id="upcomingTournaments" class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                        0
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p id="" class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Live Tournaments
                                    </p>
                                    <p id="liveTournaments" class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                        0
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                <div class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Finished Tournaments
                                    </p>
                                    <p id="finishedTournaments" class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                        0
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                            How it works?
                        </h4>
                        <div class="grid gap-6 mb-8 md:grid-cols-2">
                            <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                <h4 class="font-semibold text-gray-600 dark:text-gray-300">
                                    Tournaments
                                </h4>
                                <p class="text-gray-600 dark:text-gray-400">
                                    You have need to open Tournaments tab from there you can create a new Tournament. Then
                                    players can join to your tournament. When maximum players are reached then tournament will start
                                    automatically on time that you mentioned.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
        `}}class we{constructor(){this.urls=["/admin/players"],this.sidebar=new v("Players"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();if(e&&e.isAdmin){document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username;const n=await(await fetch(`${API_URL}/getAllPlayers/?userId=${e.id}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();if(!n.error){const a=n.players,i=document.getElementById("playersTable");i.innerHTML="",a.length>0?a.forEach(o=>{i.innerHTML+=`
                        <tr class="text-gray-700 dark:text-gray-400">
                            <td class="px-4 py-3">
                            ${o.username}
                            </td>
                            <td class="px-4 py-3 text-sm">
                            ${o.total}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${o.wins}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${o.loses}
                            </td>
                            <td class="px-4 py-3 text-xs">
                            ${o.status==="active"?'<span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm dark:bg-green-700 dark:text-green-100">':'<span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm dark:bg-red-700 dark:text-red-100">'}
                                    ${o.status}
                                </span>                    
                            </td>
                            <td class="px-4 py-3 text-sm">
                            ${new Date(o.createDateTime).toLocaleDateString()} - ${new Date(o.createDateTime).toLocaleTimeString()}
                            </td>
                        </tr>`}):i.innerHTML+=`
                    <tr class="text-gray-700 dark:text-gray-400">
                        <td colspan="6" class="text-center px-4 py-3">
                            No players found
                        </td>
                    </tr>`}}else ChnageUrl("/login")}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
            </header >
            <main class="h-full overflow-y-auto">
                <div class="container px-6 mx-auto grid">
                    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        Players
                    </h2>
                    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            All players that have created their accounts.
                        </p>
                    </div>
                    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                        <div class="w-full overflow-x-auto">
                            <table class="w-full whitespace-no-wrap">
                                <thead>
                                    <tr
                                        class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                        <th class="px-4 py-3">Username</th>
                                        <th class="px-4 py-3">Total Tournaments</th>
                                        <th class="px-4 py-3">Won Tournaments</th>
                                        <th class="px-4 py-3">Loses Tournaments</th>
                                        <th class="px-4 py-3">Status</th>
                                        <th class="px-4 py-3">Date & Time</th>
                                    </tr>
                                </thead>
                                <tbody id="playersTable" class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div >
      </div >
            `}}class ke{constructor(){this.urls=["/admin/profile"],this.sidebar=new v("Profile"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();e&&e.isAdmin?(document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username,document.getElementById("username").value=e.username):ChangeUrl("/login")}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
            </header >
            <main class="h-full overflow-y-auto">
                <div class="container px-6 mx-auto grid">
                    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        Profile
                    </h2>
                    <div class="px-4 py-3 mb-4 bg-red-300 rounded-lg shadow-md dark:bg-red-500">
                        <p class="text-sm text-gray-700 dark:text-white">
                            Do not share your personal information with anyone.
                        </p>
                    </div>
                    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <label class="block text-sm">
                            <span class="text-gray-700 dark:text-gray-400">Username</span>
                            <input id="username"
                                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                value="someone" disabled />
                        </label>
                        <label class="block mt-2 text-sm">
                            <span class="text-gray-700 dark:text-gray-400">Password</span>
                            <input
                                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                value="**************" type="password" disabled />
                        </label>

                        <div class="mt-4 text-sm">
                            <span class="text-gray-700 dark:text-gray-400">
                                Role
                            </span>
                            <div class="mt-2">
                                <label class="inline-flex items-center text-gray-600 dark:text-gray-400">
                                    <input type="radio"
                                        class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                        name="accountType" value="personal" checked disabled />
                                    <span class="ml-2">Admin</span>
                                </label>
                                <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
                                    <input type="radio"
                                        class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                        name="accountType" value="busines" disabled />
                                    <span class="ml-2">Player</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div >
      </div >
            `}}class Te{constructor(){this.urls=["/admin/setting"],this.sidebar=new v("Setting"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();e&&e.isAdmin?(document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username,document.getElementById("username").value=e.username,document.getElementById("updateBtn").addEventListener("click",()=>{const t=document.getElementById("username").value;UpdateUser(t)})):ChangeUrl("/login")}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
                <main class="h-full overflow-y-auto">
                    <div class="container px-6 mx-auto grid">
                        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Setting
                        </h2>
                        <div class="px-4 py-3 mb-4 bg-red-300 rounded-lg shadow-md dark:bg-red-500">
                            <p class="text-sm text-gray-700 dark:text-white">
                                You can not change your role.
                            </p>
                        </div>
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <label class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Username</span>
                                <input id="username"
                                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    value="someone" />
                            </label>
                            <div class="mt-4 text-sm">
                                <span class="text-gray-700 dark:text-gray-400">
                                    Role
                                </span>
                                <div class="mt-2">
                                    <label class="inline-flex items-center text-gray-600 dark:text-gray-400">
                                        <input type="radio"
                                            class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                            name="accountType" value="personal" checked disabled />
                                        <span class="ml-2">Admin</span>
                                    </label>
                                    <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
                                        <input type="radio"
                                            class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                            name="accountType" value="busines" disabled />
                                        <span class="ml-2">Player</span>
                                    </label>
                                </div>
                            </div>
                            <div class="flex justify-end mt-6">
                                <button id="updateBtn"
                                    class="mx-2 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                    Save
                                </button>
                                <button onclick="ChangeUrl('/admin/setting')"
                                    class="mx-2 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-transparent border border-purple-600 rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                    Cancel
                                </button>
                            </div>
                        </div>
                        <div class="px-4 py-3 mb-4 bg-yellow-300 rounded-lg shadow-md dark:bg-yellow-400">
                            <p class="text-sm text-gray-400 dark:text-black">
                                You will not able to create account again on this username.
                            </p>
                        </div>
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Are you want to delete your account?</span>
                                <button onclick="DeleteUser()"
                                    class="mx-2 px-4 py-2 text-sm font-medium leading-5 text-black dark:text-white transition-colors duration-150 bg-transparent border border-red-600 rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-purple">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
        `}}class Le{constructor(){this.urls=["/admin/tournaments/create"],this.sidebar=new v("Tournaments"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();e&&e.isAdmin?(document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username,document.getElementById("createTournamentForm").addEventListener("submit",async t=>{const n=document.getElementById("name").value,a=document.getElementById("rules").value,i=document.getElementById("tournamentType").value,o=document.getElementById("description").value,s=document.getElementById("dateTime").value,c=document.getElementById("prizeAndDistribution").value,p=document.getElementById("timePerMove").value,g=document.getElementById("timeBetweenRounds").value,y=document.getElementById("maxParticipants").value,h=document.getElementById("link").value;await CreateTournament(e.id,n,o,a,i,c,p,g,y,h,s)})):ChangeUrl("/login")}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
                <main class="h-full overflow-y-auto">
                    <div class="container px-6 mx-auto grid">
                        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Create Tournament
                        </h2>
                        <div
                            class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-red-600 bg-red-100 rounded-lg shadow-md focus:outline-none focus:shadow-outline-red">
                            <div class="flex items-center">
                                <span>After creating tournament, players will able to browse</span>
                            </div>
                        </div>
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <h4 class="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                                Create a New Tournaments
                            </h4>
                            <form action="new.cgi" method="POST" id="createTournamentForm" onsubmit="return false;">
                                <div class="block md:grid md:grid-cols-2 md:gap-4">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">Name</span>
                                        <input required id="name" name="name" type="text" placeholder="Tournament Name"
                                            class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input" />
                                        <p class="text-gray-700 dark:text-gray-400">Pick a very safe name for the tournament.</p>
                                    </label>
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">Game Rules</span>
                                        <select required id="rules" name="gameRules"
                                            class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-select">
                                            <option value="Guesser determines the wager amount">Guesser determines the wager amount</option>
                                            <option value="Wager amount = average bet of both players">Wager amount = average bet of both
                                                players</option>
                                        </select>
                                    </label>
                                </div>
                                <label class="block mt-4 text-sm">
                                    <span class="text-gray-700 dark:text-gray-400">Tournament Type</span>
                                    <select required id="tournamentType" name="tournamentType"
                                        class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-select">
                                        <option value="Single Elimination">Single Elimination</option>
                                        <option value="Swiss">Swiss</option>
                                    </select>
                                    <p class="text-gray-700 dark:text-gray-400">Tournament Type means how a player will be selected or unselected for a Round?</p>
                                </label>
                                <div class="block md:grid md:grid-cols-2 md:gap-4">
                                    <label class="block mt-4 text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">Time per move</span>
                                        <select required id="timePerMove" name="timePerMove"
                                            class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-select">
                                            <option value="10">10 seconds</option>
                                            <option value="15">15 seconds</option>
                                            <option value="20">20 seconds</option>
                                        </select>
                                    </label>
                                    <label class="block mt-4 text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">Max number of participants</span>
                                        <select required id="maxParticipants" name="maxParticipants"
                                            class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-select">
                                            <option value="2">2</option>
                                            <option value="4">4</option>
                                            <option value="8">8</option>
                                            <option value="16">16</option>
                                            <option value="32">32</option>
                                            <option value="64">64</option>
                                            <option value="128">128</option>
                                            <option value="256">256</option>
                                            <option value="512">512</option>
                                            <option value="1028">1028</option>
                                        </select>
                                        <p class="text-gray-700 dark:text-gray-400">When max number reached then nobody can join the
                                            tournament.</p>
                                    </label>
                                </div>
                                <div class="block md:grid md:grid-cols-2 md:gap-4">
                                    <label class="block mt-4 text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">Time between rounds</span>
                                        <select required id="timeBetweenRounds" name="timeBetweenRounds"
                                            class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-select">
                                            <option value="10">10 seconds</option>
                                            <option value="15">15 seconds</option>
                                            <option value="20">20 seconds</option>
                                        </select>
                                    </label>
                                    <label class="block mt-4 text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">Date & Time</span>
                                        <input required id="dateTime" name="date" type="datetime-local"
                                            class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input" />
                                        <p class="text-gray-700 dark:text-gray-400">This date and time is for starting tournament but if at
                                            that
                                            time not max number reached then it will not start and wait for reached max players.</p>
                                    </label>
                                </div>
                                <div class="block md:grid md:grid-cols-2 md:gap-4">
                                    <label class="block mt-4 text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">Description</span>
                                        <textarea required id="description" name="description" rows="3" placeholder="Tournament Description"
                                            class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-textarea"></textarea>
                                        <p class="text-gray-700 dark:text-gray-400">Try to keep short details about tournament in it.</p>
                                    </label>
                                    <label class="block mt-4 text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">Prize funds & Distribution</span>
                                        <input required id="prizeAndDistribution" name="prize" type="text" placeholder=""
                                            class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input" />
                                        <p class="text-gray-700 dark:text-gray-400">Choose a monetary prize fund or any other price you would
                                            like to award the winner + outline how the prizes will be distributed.</p>
                                    </label>
                                </div>
                                <label class="block mt-4 text-sm">
                                    <span class="text-gray-700 dark:text-gray-400">Any link want to add (optional)</span>
                                    <input id="link" name="link" type="url" placeholder="https://www.discord.com"
                                        class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input" />
                                </label>
                                <div class="flex items-center justify-end mt-4">
                                    <button type="submit"
                                        class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                        <li class="fas fa-trophy mr-2"></li>
                                        Create NEW Tournament
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div >
        </div >
        `}}class Ee{constructor(){this.urls=["/admin/tournaments/upcoming"],this.sidebar=new v("Tournaments"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();e&&e.isAdmin?(document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username,await this.loadTournaments("upcoming","tournamentsTable")):ChangeUrl("/login")}async loadTournaments(e,t){const a=await(await fetch(`${API_URL}/getAllTournaments/?status=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();if(!a.error){const i=a.tournaments,o=document.getElementById(t);o.innerHTML="",i.length>0?i.forEach(s=>{o.innerHTML+=`
                    <tr class="text-gray-700 dark:text-gray-400">
                        <td class="px-4 py-3">
                            <div class="flex items-center text-sm">
                                <div>
                                    <p class="font-semibold">${s.name}</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${s.playersArr.length}</p>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${s.maxPlayers}</p>
                        </td>
                        <td class="px-4 py-3 text-xs">
                            ${new Date(s.startDateTime)>new Date?'<span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm dark:bg-green-700 dark:text-green-100">Upcoming</span>':'<span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm dark:bg-red-700 dark:text-red-100">Not Started</span>'}
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${new Date(s.createDateTime).toLocaleDateString()} - ${new Date(s.createDateTime).toLocaleTimeString()}</p>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${new Date(s.startDateTime).toLocaleDateString()} - ${new Date(s.startDateTime).toLocaleTimeString()}</p>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <div class="flex items-center space-x-4 text-sm">
                                <button onclick="ChangeUrl('/admin/tournaments/view?tournamentId=${s.id}')"
                                    class="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded dark:bg-yellow-700 dark:text-yellow-100">
                                    View
                                </button>
                                <button onclick="ChangeUrl('/admin/tournaments/edit?tournamentId=${s.id}')"
                                    class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded dark:bg-green-700 dark:text-green-100">
                                    Edit
                                </button>
                                <button onclick="DeleteTournament('${s.id}','/admin/tournaments/upcoming')"
                                    class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded dark:bg-red-700 dark:text-red-100">
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                    `}):o.innerHTML=`
                    <tr class="text-gray-700 dark:text-gray-400">
                        <td colspan="6" class="text-center px-4 py-3">No upcoming tournaments</td>
                    </tr>
                `}}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
                <main class="h-full overflow-y-auto">
                    <div class="container px-6 mx-auto grid">
                        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Upcoming Tournaments
                        </h2>
                        <div
                            class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-orange-600 bg-orange-100 rounded-lg shadow-md focus:outline-none focus:shadow-outline-orange">
                            <div class="flex items-center">
                                <span>Now all players are able to browse</span>
                            </div>
                        </div>
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg overflow-auto shadow-md dark:bg-gray-800">
                            <div class="w-full overflow-x-auto">
                                <h4 class="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                                    These all are tournaments are coming soon.
                                </h4>
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-3">Name</th>
                                            <th class="px-4 py-3">Current Players</th>
                                            <th class="px-4 py-3">Max Players</th>
                                            <th class="px-4 py-3">Status</th>
                                            <th class="px-4 py-3">Create At</th>
                                            <th class="px-4 py-3">Start At</th>
                                            <th class="px-4 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tournamentsTable" class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
        `}}class Me{constructor(){this.urls=["/admin/tournaments/live"],this.sidebar=new v("Tournaments"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();e&&e.isAdmin?(document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username,await this.loadTournaments("live","tournamentsTable")):ChangeUrl("/login")}async loadTournaments(e,t){const a=await(await fetch(`${API_URL}/getAllTournaments/?status=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();if(!a.error){const i=a.tournaments,o=document.getElementById(t);o.innerHTML="",i.length>0?i.forEach(s=>{o.innerHTML+=`
                    <tr class="text-gray-700 dark:text-gray-400">
                        <td class="px-4 py-3">
                            <div class="flex items-center text-sm">
                                <div>
                                    <p class="font-semibold">${s.name}</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${s.roundPlayersArr.length>0?s.roundPlayersArr[s.roundPlayersArr.length-1].length:s.maxPlayers}</p>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${s.maxPlayers}</p>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${new Date(s.createDateTime).toLocaleDateString()} - ${new Date(s.createDateTime).toLocaleTimeString()}</p>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${new Date(s.startDateTime).toLocaleDateString()} - ${new Date(s.startDateTime).toLocaleTimeString()}</p>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <div class="flex items-center space-x-4 text-sm">
                                <button onclick="ChangeUrl('/admin/tournaments/view?tournamentId=${s.id}')"
                                    class="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded dark:bg-yellow-700 dark:text-yellow-100">
                                    View
                                </button>
                                <button onclick="DeleteTournament('${s.id}','/admin/tournaments/live')"
                                    class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded dark:bg-red-700 dark:text-red-100">
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                    `}):o.innerHTML=`
                    <tr class="text-gray-700 dark:text-gray-400">
                        <td colspan="6" class="text-center px-4 py-3">No live tournaments</td>
                    </tr>
                `}}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
                <main class="h-full overflow-y-auto">
                    <div class="container px-6 mx-auto grid">
                        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Live Tournaments
                        </h2>
                        <div
                            class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-green-600 bg-green-100 rounded-lg shadow-md focus:outline-none focus:shadow-outline-green">
                            <div class="flex items-center">
                                <span>Now other players are not able to browse</span>
                            </div>
                        </div>
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg overflow-auto shadow-md dark:bg-gray-800">
                            <div class="w-full overflow-x-auto">
                                <h4 class="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                                    These all are tournaments are live now.
                                </h4>
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-3">Name</th>
                                            <th class="px-4 py-3">Current Players</th>
                                            <th class="px-4 py-3">Max Players</th>
                                            <th class="px-4 py-3">Create At</th>
                                            <th class="px-4 py-3">Start At</th>
                                            <th class="px-4 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tournamentsTable"
                                        class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
        `}}class $e{constructor(){this.urls=["/admin/tournaments/finished"],this.sidebar=new v("Tournaments"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();e&&e.isAdmin?(document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username,await this.loadTournaments("finished","tournamentsTable")):ChangeUrl("/login")}async loadTournaments(e,t){const a=await(await fetch(`${API_URL}/getAllTournaments/?status=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();if(!a.error){const i=a.tournaments,o=document.getElementById(t);o.innerHTML="",i.length>0?i.forEach(s=>{o.innerHTML+=`
                <tr class="text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                            <div>
                                <p class="font-semibold">${s.name}</p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        <p class="font-semibold">${s.winner}</p>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        <p class="font-semibold">${s.maxPlayers}</p>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        <p class="font-semibold">${new Date(s.createDateTime).toLocaleDateString()} - ${new Date(s.createDateTime).toLocaleTimeString()}</p>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        <p class="font-semibold">${new Date(s.startDateTime).toLocaleDateString()} - ${new Date(s.startDateTime).toLocaleTimeString()}</p>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        <p class="font-semibold">${new Date(s.endDateTime).toLocaleDateString()} - ${new Date(s.endDateTime).toLocaleTimeString()}</p>
                    </td>
                </tr>
                `}):o.innerHTML=`
                <tr class="text-gray-700 dark:text-gray-400">
                    <td colspan="6" class="text-center px-4 py-3">No finished tournaments</td>
                </tr>
            `}}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
                <main class="h-full overflow-y-auto">
                    <div class="container px-6 mx-auto grid">
                        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Finished Tournaments
                        </h2>
                        <div
                            class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-teal-600 bg-teal-100 rounded-lg shadow-md focus:outline-none focus:shadow-outline-teal">
                            <div class="flex items-center">
                                <span>Now players are not able to browse</span>
                            </div>
                        </div>
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg overflow-auto shadow-md dark:bg-gray-800">
                            <div class="w-full overflow-x-auto">
                                <h4 class="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                                    These all are tournaments already finished.
                                </h4>
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-3">Name</th>
                                            <th class="px-4 py-3">Winner</th>
                                            <th class="px-4 py-3">Max Players</th>
                                            <th class="px-4 py-3">Create At</th>
                                            <th class="px-4 py-3">Start At</th>
                                            <th class="px-4 py-3">Finish At</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tournamentsTable"
                                        class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
        `}}class Be{constructor(){this.urls=["/admin/tournaments/deleted"],this.sidebar=new v("Tournaments"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();e&&e.isAdmin?(document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username,await this.loadTournaments("deleted","tournamentsTable")):ChangeUrl("/login")}async loadTournaments(e,t){const a=await(await fetch(`${API_URL}/getAllTournaments/?status=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();if(!a.error){const i=a.tournaments,o=document.getElementById(t);o.innerHTML="",i.length>0?i.forEach(s=>{o.innerHTML+=`
                    <tr class="text-gray-700 dark:text-gray-400">
                        <td class="px-4 py-3">
                            <div class="flex items-center text-sm">
                                <div>
                                    <p class="font-semibold">${s.name}</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${s.playersArr.length}</p>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${s.maxPlayers}</p>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${new Date(s.createDateTime).toLocaleDateString()} - ${new Date(s.createDateTime).toLocaleTimeString()}</p>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${new Date(s.startDateTime).toLocaleDateString()} - ${new Date(s.startDateTime).toLocaleTimeString()}</p>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <p class="font-semibold">${new Date(s.deleteDateTime).toLocaleDateString()} - ${new Date(s.deleteDateTime).toLocaleTimeString()}</p>
                        </td>
                    </tr>
                    `}):o.innerHTML=`
                    <tr class="text-gray-700 dark:text-gray-400">
                        <td colspan="6" class="text-center px-4 py-3">No deleted tournaments</td>
                    </tr>
                `}}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
                <main class="h-full overflow-y-auto">
                    <div class="container px-6 mx-auto grid">
                        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Deleted Tournaments
                        </h2>
                        <div
                            class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-gray-800 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:shadow-outline-gray">
                            <div class="flex items-center">
                                <span>Now players are not able to browse</span>
                            </div>
                        </div>
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg overflow-auto shadow-md dark:bg-gray-800">
                            <div class="w-full overflow-x-auto">
                                <h4 class="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                                    These all are tournaments deleted by Admin.
                                </h4>
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-3">Name</th>
                                            <th class="px-4 py-3">Current Players</th>
                                            <th class="px-4 py-3">Max Players</th>
                                            <th class="px-4 py-3">Create At</th>
                                            <th class="px-4 py-3">Start At</th>
                                            <th class="px-4 py-3">Delete At</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tournamentsTable"
                                        class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
        `}}class Ie{constructor(){this.urls=["/admin/tournaments/view"],this.sidebar=new v("Tournaments"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();if(e&&e.isAdmin)if(document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username,window.location.href.split("?")[1]){let t=window.location.href.split("?")[1].split("=")[1];t?await this.loadTournament(t):ChangeUrl("/admin/dashboard")}else ChangeUrl("/admin/dashboard");else ChangeUrl("/login")}async loadTournament(e){const n=await(await fetch(`${API_URL}/getTournament/?tournamentId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();if(!n.error){const a=n.tournament;if(document.getElementById("name").innerHTML=a.name,document.getElementById("description").innerHTML=a.description,document.getElementById("rules").innerHTML=a.rules,document.getElementById("currentPlayers").innerHTML=a.playersArr.length,document.getElementById("maxPlayers").innerHTML=a.maxPlayers,document.getElementById("create").innerHTML=`${new Date(a.createDateTime).toLocaleDateString()} - ${new Date(a.createDateTime).toLocaleTimeString()}`,document.getElementById("start").innerHTML=`${new Date(a.startDateTime).toLocaleDateString()} - ${new Date(a.startDateTime).toLocaleTimeString()}`,document.getElementById("prizeDetails").innerHTML=a.prizeAndDistribution,a.optionalLink){const i=document.getElementById("link");i.innerHTML=a.optionalLink,i.setAttribute("href",a.optionalLink)}else document.getElementById("link").innerHTML="No Link",link.setAttribute("href","")}}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
            ${this.sidebar.onRender()}
            <div class="flex flex-col flex-1 w-full">
                ${this.navbar.onRender()}
                <main class="h-full overflow-y-auto">
                    <div class="container px-6 mx-auto grid">
                        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            View Tournament
                        </h2>
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <h4 class="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                                These all are the Tournament details.
                            </h4>
                            <div class="grid grid-cols-1 gap-6 mt-4">
                                <div class="flex flex-col p-4 bg-white rounded-lg dark:bg-gray-800">
                                    <div class="grid md:grid-cols-2 justify-between mt-4">
                                        <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                                            Name
                                        </span>
                                        <span id="name"
                                            class="px-2 py-1 font-semibold text-gray-500 bg-gray-200 rounded shadow dark:bg-gray-600 dark:text-gray-200">
                                            Lorem ipsum dolor sit amet
                                        </span>
                                    </div>
                                    <div class="grid md:grid-cols-2 justify-between mt-4">
                                        <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                                            Rules
                                        </span>
                                        <span id="rules"
                                            class="px-2 py-1 font-semibold text-gray-500 bg-gray-200 rounded shadow dark:bg-gray-600 dark:text-gray-200">
                                            Lorem ipsum dolor sit amet,
                                        </span>
                                    </div>
                                    <div class="grid md:grid-cols-2 justify-between mt-4">
                                        <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                                            Description
                                        </span>
                                        <span id="description"
                                            class="px-2 py-1 font-semibold text-gray-500 bg-gray-200 rounded shadow dark:bg-gray-600 dark:text-gray-200">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quia consequuntur quos ipsum!
                                            Nesciunt accusamus quidem hic, fugiat quasi facere commodi inventore quo, recusandae, laudantium
                                            assumenda perferendis dolorum optio. Nobis.
                                        </span>
                                    </div>

                                    <div class="grid md:grid-cols-2 justify-between mt-4">
                                        <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                                            Current Players
                                        </span>
                                        <span
                                            class="px-2 py-1 font-semibold text-gray-500 bg-gray-200 rounded shadow dark:bg-gray-600 dark:text-gray-200">
                                            <li class="fas fa-users mr-2"></li><span id="currentPlayers">20</span>
                                        </span>
                                    </div>
                                    <div class="grid md:grid-cols-2 justify-between mt-4">
                                        <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                                            Max Players
                                        </span>
                                        <span
                                            class="px-2 py-1 font-semibold text-gray-500 bg-gray-200 rounded shadow dark:bg-gray-600 dark:text-gray-200">
                                            <i class="fa-solid fa-bullseye mr-2"></i><span id="maxPlayers">32</span>
                                        </span>
                                    </div>
                                    <div class="grid md:grid-cols-2 justify-between mt-4">
                                        <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                                            Prize and distribution
                                        </span>
                                        <span id="prizeDetails"
                                            class="px-2 py-1 font-semibold text-gray-500 bg-gray-200 rounded shadow dark:bg-gray-600 dark:text-gray-200">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quia consequuntur quos ipsum!
                                            Nesciunt accusamus quidem hic, fugiat quasi facere commodi inventore quo, recusandae, laudantium
                                            assumenda perferendis dolorum optio. Nobis.
                                        </span>
                                    </div>
                                    <div class="grid md:grid-cols-2 justify-between mt-4">
                                        <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                                            Create At
                                        </span>
                                        <span
                                            class="px-2 py-1 font-semibold text-gray-500 bg-gray-200 rounded shadow dark:bg-gray-600 dark:text-gray-200">
                                            <li class="fas fa-clock mr-2"></li><span id="create">2020/10/20 - 10:00 PM</span>
                                        </span>
                                    </div>
                                    <div class="grid md:grid-cols-2 justify-between mt-4">
                                        <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                                            Start At
                                        </span>
                                        <span
                                            class="px-2 py-1 font-semibold text-gray-500 bg-gray-200 rounded shadow dark:bg-gray-600 dark:text-gray-200">
                                            <li class="fas fa-hourglass-start mr-2"></li><span id="start">2020/10/20 - 10:00 PM</span>
                                        </span>
                                    </div>
                                    <a id="link" class="mt-2 text-blue-700 dark:text-blue-600" href="www.google.com">www.google.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
        `}}class Pe{constructor(){this.urls=["/admin/tournaments/edit"],this.sidebar=new v("Tournaments"),this.navbar=new m}async onLoad(){this.navbar.onLoad(),this.sidebar.onLoad();const e=await GetUser();if(e&&e.isAdmin)if(document.getElementById("username1").innerHTML=e.username,document.getElementById("username2").innerHTML=e.username,window.location.href.split("?")[1]){let t=window.location.href.split("?")[1].split("=")[1];t?(await this.loadTournament(t),document.getElementById("updateTournamentForm").addEventListener("submit",async n=>{const a=document.getElementById("name").value,i=document.getElementById("rules").value,o=document.getElementById("tournamentType").value,s=document.getElementById("description").value,c=document.getElementById("dateTime").value,p=document.getElementById("prizeAndDistribution").value,g=document.getElementById("timePerMove").value,y=document.getElementById("timeBetweenRounds").value,h=document.getElementById("maxParticipants").value,k=document.getElementById("link").value;await UpdateTournament(e.id,t,a,s,i,o,p,g,y,h,c,k)}),document.getElementById("cancelBtn").addEventListener("click",()=>{ChangeUrl("/admin/tournaments/edit?tournamentId="+t)})):ChangeUrl("/admin/dashboard")}else ChangeUrl("/admin/dashboard");else ChangeUrl("/login")}async loadTournament(e){const n=await(await fetch(`${API_URL}/getTournament/?tournamentId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();if(n.error)ChangeUrl("/admin/dashboard");else{const a=n.tournament;document.getElementById("name").value=a.name,document.getElementById("description").innerHTML=a.description,document.getElementById("rules").value=a.rules,document.getElementById("tournamentType").value=a.tournamentType,document.getElementById("timePerMove").value=a.timePerMove,document.getElementById("timeBetweenRounds").value=a.timeBetweenRounds,document.getElementById("maxParticipants").value=a.maxPlayers;let i=new Date(a.startDateTime),o=i.getFullYear(),s=i.getMonth()+1,c=i.getDate(),p=i.getHours(),g=i.getMinutes(),y=i.getSeconds();s<10&&(s="0"+s),c<10&&(c="0"+c),p<10&&(p="0"+p),g<10&&(g="0"+g),y<10&&(y="0"+y);let h=o+"-"+s+"-"+c+"T"+p+":"+g+":"+y;document.getElementById("dateTime").value=h,document.getElementById("prizeAndDistribution").value=a.prizeAndDistribution,document.getElementById("link").innerHTML=a.optionalLink}}onRender(){return`
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
        ${this.sidebar.onRender()}
        <div class="flex flex-col flex-1 w-full">
            ${this.navbar.onRender()}
            <main class="h-full overflow-y-auto">
                <div class="container px-6 mx-auto grid">
                    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        Edit Tournament
                    </h2>
                    <div
                        class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-green-600 bg-green-100 rounded-lg shadow-md focus:outline-none focus:shadow-outline-green">
                        <div class="flex items-center">
                            <span>You can not update name of tournament.</span>
                        </div>
                    </div>
                    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <h4 class="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                            Edit details of Tournament.
                        </h4>
                        <form action="new.cgi" method="POST" id="updateTournamentForm" onsubmit="return false;">
                            <div class="block md:grid md:grid-cols-2 md:gap-4">
                                <label class="block text-sm">
                                    <span class="text-gray-700 dark:text-gray-400">Name</span>
                                    <input disabled id="name" name="name" type="text" placeholder="Tournament Name"
                                        class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input" />
                                </label>
                                <label class="block text-sm">
                                    <span class="text-gray-700 dark:text-gray-400">Game Rules</span>
                                    <select required id="rules" name="gameRules"
                                        class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-select">
                                        <option value="Guesser determines the wager amount">Guesser determines the wager amount</option>
                                        <option value="Wager amount = average bet of both players">Wager amount = average bet of both
                                            players</option>
                                    </select>
                                </label>
                            </div>
                            <label class="block mt-4 text-sm">
                                    <span class="text-gray-700 dark:text-gray-400">Tournament Type</span>
                                    <select required id="tournamentType" name="tournamentType"
                                        class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-select">
                                        <option value="Single Elimination">Single Elimination</option>
                                        <option value="Swiss">Swiss</option>
                                    </select>
                                    <p class="text-gray-700 dark:text-gray-400">Tournament Type means how a player will be selected or unselected for a Round?</p>
                                </label>
                            <div class="block md:grid md:grid-cols-2 md:gap-4">
                                <label class="block mt-4 text-sm">
                                    <span class="text-gray-700 dark:text-gray-400">Time per move</span>
                                    <select required id="timePerMove" name="timePerMove"
                                        class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-select">
                                        <option value="10">10 seconds</option>
                                        <option value="15">15 seconds</option>
                                        <option value="20">20 seconds</option>
                                    </select>
                                </label>
                                <label class="block mt-4 text-sm">
                                    <span class="text-gray-700 dark:text-gray-400">Max number of participants</span>
                                    <select required id="maxParticipants" name="maxParticipants"
                                        class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-select">
                                        <option value="2">2</option>
                                        <option value="4">4</option>
                                        <option value="8">8</option>
                                        <option value="16">16</option>
                                        <option value="32">32</option>
                                        <option value="64">64</option>
                                        <option value="128">128</option>
                                        <option value="256">256</option>
                                        <option value="512">512</option>
                                        <option value="1028">1028</option>
                                    </select>
                                    <p class="text-gray-700 dark:text-gray-400">When max number reached then nobody can join the
                                        tournament.</p>
                                </label>
                            </div>
                            <div class="block md:grid md:grid-cols-2 md:gap-4">
                                <label class="block mt-4 text-sm">
                                    <span class="text-gray-700 dark:text-gray-400">Time between rounds</span>
                                    <select required id="timeBetweenRounds" name="timeBetweenRounds"
                                        class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-select">
                                        <option value="10">10 seconds</option>
                                        <option value="15">15 seconds</option>
                                        <option value="20">20 seconds</option>
                                    </select>
                                </label>
                                <label class="block mt-4 text-sm">
                                    <span class="text-gray-700 dark:text-gray-400">Date & Time</span>
                                    <input required id="dateTime" name="date" type="datetime-local"
                                        class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input" />
                                    <p class="text-gray-700 dark:text-gray-400">This date and time is for starting tournament but if at
                                        that
                                        time not max number reached then it will not start and wait for reached max players.</p>
                                </label>
                            </div>
                            <div class="block md:grid md:grid-cols-2 md:gap-4">
                                <label class="block mt-4 text-sm">
                                    <span class="text-gray-700 dark:text-gray-400">Description</span>
                                    <textarea required id="description" name="description" rows="3" placeholder="Tournament Description"
                                        class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-textarea"></textarea>
                                    <p class="text-gray-700 dark:text-gray-400">Try to keep short details about tournament in it.</p>
                                </label>
                                <label class="block mt-4 text-sm">
                                    <span class="text-gray-700 dark:text-gray-400">Prize funds & Distribution</span>
                                    <input required id="prizeAndDistribution" name="prize" type="text" placeholder=""
                                        class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input" />
                                    <p class="text-gray-700 dark:text-gray-400">Choose a monetary prize fund or any other price you would
                                        like to award the winner + outline how the prizes will be distributed.</p>
                                </label>
                            </div>
                            <label class="block mt-4 text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Any link want to add (optional)</span>
                                <input id="link" name="link" type="url" placeholder="https://www.discord.com"
                                    class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input" />
                            </label>
                            <div class="flex items-center justify-end mt-4">
                                <button type="submit"
                                    class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">
                                    Update Tournament
                                </button>
                                <button type="button" id="cancelBtn"
                                    class="ml-2 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-600 border border-transparent rounded-lg active:bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div >
      </div >
            `}}class De{constructor(){b(this,"update",e=>{this.updatePlayers(e);let t=e.currentPlayers.findIndex(n=>n.playerId===this.currentUser.id);if(t!==-1){let n=e.currentPlayers.findIndex(a=>a.playerId===e.currentPlayers[t].matchWith);if(n!==-1){this.playerOne=e.currentPlayers[t],this.playerTwo=e.currentPlayers[n];const a=GetHtmlElement(".name.one");a.innerHTML=`${this.playerOne.username}`;const i=GetHtmlElement(".name.two");i.innerHTML=`${this.playerTwo.username}`,this.renderScore(),this.renderMarbles(),this.renderRoles(),this.resetBetField(),this.playerOne.playerToPlay===this.playerOne.no&&this.betForm.classList.remove("hidden-item")}}else alert("You are OUT from this tournament now due to lose!"),ChangeUrl("/player/dashboard")});b(this,"resetBetField",()=>{if(this.playerOne.no===this.playerOne.playerToPlay){const n=document.querySelector(".tick.one"),a=document.querySelector(".tick.two"),i=document.querySelector(".tick.three"),o=document.querySelector(".tick.four"),s=document.querySelector(".tick.five"),c=document.querySelector(".tick.six"),p=document.querySelector(".tick.seven"),g=document.querySelector(".tick.eight"),y=document.querySelector(".tick.nine"),h=document.querySelector(".tick.ten");var e=[n,a,i,o,s,c,p,g,y,h];if(this.playerOne.score<this.playerTwo.score)for(var t=0;t<10;t++)t<this.playerOne.score?e[t].classList.contains("hidden")&&e[t].classList.remove("hidden"):e[t].classList.contains("hidden")||e[t].classList.add("hidden");else for(var t=0;t<10;t++)t<this.playerTwo.score?e[t].classList.contains("hidden")&&e[t].classList.remove("hidden"):e[t].classList.contains("hidden")||e[t].classList.add("hidden")}});b(this,"placeBets",()=>{if(this.playerOne.playerToPlay===this.playerOne.no){if(this.betFieldOne.value>this.playerOne.score||this.betFieldOne.value>this.playerTwo.score||this.betFieldOne.value<1||isNaN(this.betFieldOne.value))return;this.playerOne.bet=this.betFieldOne.value;const e=document.getElementById("bet-type");if(console.log(e.checked),e.checked===!1)this.playerOne.choice="even";else if(e.checked===!0)this.playerOne.choice="odd";else return;this.counter.innerHTML="",this.betForm.classList.add("hidden-item"),GetSocket().emit("addedbet",{tournamentId:this.currentTournamentId,player:this.playerOne})}});b(this,"playRound",()=>{if(this.roundCount++,this.roundCount===1){const e=CreateHtmlElemment("p",`<div>Players have been assigned roles randomly</div>
        <p><div>Round ${this.roundCount}</div>
        <div>Make your moves</div></p>`);this.logs.appendChild(e),this.logs.scrollTop=this.logs.scrollHeight}else if(this.playerOne.score===0||this.playerTwo.score===0){this.betForm.classList.add("hidden-item"),this.roleOne.classList.add("hidden-item"),this.roleTwo.classList.add("hidden-item");const e=CreateHtmlElemment("p",`<div>${this.roundWinner} ${this.outcome} and won ${this.wonAmount} marbles.</div>
        <div>${this.playerOne.username} bet ${this.playerOne.bet} as ${this.playerOne.role} vs ${this.playerTwo.username}'s ${this.playerTwo.bet} as ${this.playerTwo.role}</div>
        <div>Game over</div>
        <div>${this.roundWinner} is the winner</div>`);this.logs.appendChild(e),this.logs.scrollTop=this.logs.scrollHeight;const t=GetHtmlElement("#popupResult");this.roundWinner===this.playerOne.username?t.innerHTML=this.language==="EN"?"You won!\u{1F973}":"\u0422\u044B \u043F\u043E\u0431\u0435\u0434\u0438\u043B\u0438!\u{1F973}":this.roundWinner===this.playerTwo.username&&(t.innerHTML=this.language==="EN"?"You lost\u{1F641}":"\u0422\u044B \u043F\u0440\u043E\u0438\u0433\u0440\u0430\u043B\u0430\u{1F641}"),this.popup.classList.remove("hidden")}else{const e=CreateHtmlElemment("p",`<div>${this.roundWinner} ${this.outcome} and won ${this.wonAmount} marbles.</div>
        <div>${this.playerOne.username} bet ${this.playerOne.bet} as ${this.playerOne.role} vs ${this.playerTwo.username}'s ${this.playerTwo.bet} as ${this.playerTwo.role}</div>
        <p><div>Round ${this.roundCount}</div>
        <div>Make your moves</div></p>`);this.logs.appendChild(e),this.logs.scrollTop=this.logs.scrollHeight}});b(this,"renderRoles",()=>{this.playerOne&&(this.playerOne.role==="guesser"?(this.roleOne.innerHTML=this.language==="EN"?"guesser":"\u0423\u0433\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0438\u0439",this.roleTwo.innerHTML=this.language==="EN"?"hider":"\u0417\u0430\u0433\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0438\u0439"):this.playerOne.role==="hider"&&(this.roleOne.innerHTML=this.language==="EN"?"hider":"\u0417\u0430\u0433\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0438\u0439",this.roleTwo.innerHTML=this.language==="EN"?"guesser":"\u0423\u0433\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0438\u0439"))});b(this,"renderScore",()=>{const e=GetHtmlElement(".score.one");e.innerHTML=`${this.playerOne.score}`;const t=GetHtmlElement(".score.two");t.innerHTML=`${this.playerTwo.score}`});b(this,"renderMarbles",()=>{this.marblesOne.innerHTML="";for(let e=0;e<this.playerOne.score;e++)this.marblesOne.innerHTML+='<div class="marble"></div>';this.marblesTwo.innerHTML="";for(let e=0;e<this.playerTwo.score;e++)this.marblesTwo.innerHTML+='<div class="marble"></div>'});b(this,"changeLanguage",()=>{this.language==="EN"?this.language="RU":this.language="EN",this.updateGameLanguage()});b(this,"updateGameLanguage",()=>{const e=GetHtmlElement("#even"),t=GetHtmlElement("#odd");if(this.renderRoles(),this.language==="EN"){e.innerHTML="Even",t.innerHTML="Odd",this.submitBetOne.innerHTML="Submit",this.rules.innerHTML="Game Rules";const n=document.getElementById("ru"),a=document.getElementById("en");n.classList.add("hidden"),a.classList.remove("hidden")}else{e.innerHTML="\u0427\u0435\u0442",t.innerHTML="\u041D\u0435\u0447\u0435\u0442",this.submitBetOne.innerHTML="\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",this.rules.innerHTML="\u043F\u0440\u0430\u0432\u0438\u043B\u0430";const n=document.getElementById("ru"),a=document.getElementById("en");n.classList.remove("hidden"),a.classList.add("hidden")}});b(this,"showRules",()=>{if(this.language==="EN"){let e=GetHtmlElement("#rulesEN");e.style.visibility="visible",e.style.opacity="1",GetHtmlElement(".closeEN").addEventListener("click",()=>{e.style.visibility="hidden",e.style.opacity="0"})}if(this.language==="RU"){let e=GetHtmlElement("#rulesRU");e.style.visibility="visible",e.style.opacity="1",GetHtmlElement(".closeRU").addEventListener("click",()=>{e.style.visibility="hidden",rulesEN.style.opacity="0"})}});this.urls=["/games/marblesgame"],this.currentTournamentId=null,this.currentUser=null,this.playerOne,this.playerTwo,this.roundCount=0,this.language="EN",this.isStartedTournament=!1,this.roundWinner=null,this.wonAmount=null,this.outcome=null,this.counter=null,this.betForm=null,this.rules=null,this.roleOne=null,this.roleTwo=null,this.logs=null,this.marblesOne=null,this.marblesTwo=null,this.languageBtn=null,this.submitBetOne=null,this.betFieldOne=null}async onLoad(){if(this.currentUser=await GetUser(),this.currentUser)if(window.location.href.split("?")[1])if(this.currentTournamentId=window.location.href.split("?")[1].split("=")[1],this.currentTournamentId){if(socket=GetSocket(),socket){let e=GetSocket();e.emit("valid",{tournamentId:this.currentTournamentId,userId:this.currentUser.id}),e.on("valid",t=>{if(t)if(!t.valid)alert("You are not allowed to join this tournament!"),ChangeUrl("/player/dashboard");else{let ne=function(){M<E&&(T.classList.add("up"),P.classList.add("visible"),D.classList.add("none"),C.classList.add("rotate")),M>E&&(T.classList.remove("up"),P.classList.remove("visible"),D.classList.remove("none"),C.classList.remove("rotate"))};const n=document.getElementById("bet-amount"),a=document.querySelector(".tick.one"),i=document.querySelector(".tick.two"),o=document.querySelector(".tick.three"),s=document.querySelector(".tick.four"),c=document.querySelector(".tick.five"),p=document.querySelector(".tick.six"),g=document.querySelector(".tick.seven"),y=document.querySelector(".tick.eight"),h=document.querySelector(".tick.nine"),k=document.querySelector(".tick.ten");let x=()=>{a.classList.remove("ticked"),i.classList.remove("ticked"),o.classList.remove("ticked"),s.classList.remove("ticked"),c.classList.remove("ticked"),p.classList.remove("ticked"),g.classList.remove("ticked"),y.classList.remove("ticked"),h.classList.remove("ticked"),k.classList.remove("ticked");for(var l=[a,i,o,s,c,p,g,y,h,k],d=0;d<n.value;d++)l[d].classList.add("ticked")};a.addEventListener("click",()=>{n.value=1,x()}),i.addEventListener("click",()=>{n.value=2,x()}),o.addEventListener("click",()=>{n.value=3,x()}),s.addEventListener("click",()=>{n.value=4,x()}),c.addEventListener("click",()=>{n.value=5,x()}),p.addEventListener("click",()=>{n.value=6,x()}),g.addEventListener("click",()=>{n.value=7,x()}),y.addEventListener("click",()=>{n.value=8,x()}),h.addEventListener("click",()=>{n.value=9,x()}),k.addEventListener("click",()=>{n.value=10,x()});const T=document.getElementById("layer-chat"),P=document.querySelector(".chat-prompt"),D=document.querySelector(".swipe-info"),C=document.querySelector(".swipe-img");let E=0,M=0;T.addEventListener("touchstart",l=>{E=l.changedTouches[0].screenY}),T.addEventListener("touchend",l=>{M=l.changedTouches[0].screenY,ne()});const $=document.getElementById("play"),H=document.getElementById("music");$.onclick=()=>{$.classList.toggle("on"),$.classList.contains("on")?H.play():H.pause()},this.counter=GetHtmlElement("#counter"),this.betForm=GetHtmlElement("#layer-bet"),this.roleOne=GetHtmlElement(".role.one"),this.roleTwo=GetHtmlElement(".role.two"),this.logs=GetHtmlElement("#logs"),this.marblesOne=GetHtmlElement(".marbles.one"),this.marblesTwo=GetHtmlElement(".marbles.two"),this.languageBtn=GetHtmlElement("#language"),this.submitBetOne=GetHtmlElement("#submit"),this.betFieldOne=GetHtmlElement("#bet-amount"),this.popup=GetHtmlElement("#popup"),this.rules=GetHtmlElement("#rules"),this.isStartedTournament=!1,this.init(),e.emit("update",{tournamentId:this.currentTournamentId,userId:this.currentUser.id}),e.on("counter",l=>{let d=window.location.pathname;if(this.urls.includes(d)&&this.currentTournamentId===l.tournamentId){let f=60-l.seconds;this.counter.innerHTML=f>9?"00:"+f:"00:0"+f,60-l.seconds<=0&&(this.counter.innerHTML="")}}),e.on("message",l=>{let d=window.location.pathname;if(this.urls.includes(d)&&l.message){const f=GetHtmlElement("#popupResult");f.innerHTML=l.message,this.popup.classList.remove("hidden")}}),e.on("startTournament",l=>{let d=window.location.pathname;this.urls.includes(d)&&this.start()}),e.on("startRound",l=>{let d=window.location.pathname;this.urls.includes(d)}),e.on("betCounter",l=>{let d=window.location.pathname;this.urls.includes(d)&&(this.updatePlayers(l.tournament),l.tournament.currentPlayers.forEach(f=>{if(f.playerId===this.currentUser.id&&this.playerOne.score>0&&this.playerTwo.score>0&&f.no===f.playerToPlay){let B=l.tournament.timePerMove-f.betTimeSeconds;this.counter.innerHTML=B>9?"00:"+B:"00:0"+B}}))}),e.on("autoAddBet",l=>{let d=window.location.pathname;this.urls.includes(d)&&(this.counter.innerHTML="",n.value=1,x(),this.betFieldOne.value="1",this.betForm.classList.add("hidden-item"))}),e.on("updatePlayers",l=>{let d=window.location.pathname;this.urls.includes(d)&&this.updatePlayers(l.tournament)}),e.on("update",l=>{let d=window.location.pathname;this.urls.includes(d)&&this.update(l.tournament)}),e.on("playRound",l=>{let d=window.location.pathname;this.urls.includes(d)&&this.currentUser&&(this.roundWinner=l.roundWinner,this.wonAmount=l.wonAmount,this.outcome=l.outcome,this.playRound())}),e.on("endRound",l=>{let d=window.location.pathname;this.urls.includes(d)}),e.on("endTournament",l=>{let d=window.location.pathname;this.urls.includes(d)&&(alert("Tournament ended!"),ChangeUrl("/player/dashboard"))}),e.on("deleteTournament",l=>{let d=window.location.pathname;this.urls.includes(d)&&(alert("Tournament deleted!"),ChangeUrl("/player/dashboard"))})}})}}else ChangeUrl("/player/dashboard");else ChangeUrl("/player/dashboard");else ChangeUrl("/login")}init(){this.submitBetOne.addEventListener("click",this.placeBets),this.languageBtn.addEventListener("click",this.changeLanguage),this.rules.addEventListener("click",this.showRules),this.updateGameLanguage()}start(){this.isStartedTournament=!0,this.roundCount=0,GetHtmlElement("#layer-p1").classList.remove("hidden-item"),GetHtmlElement("#layer-p2").classList.remove("hidden-item"),this.updateGameLanguage(),this.playRound()}updatePlayers(e){this.isStartedTournament||this.start(),e.currentPlayers.forEach(t=>{t.playerId===this.currentUser.id&&(this.playerOne=t)}),e.currentPlayers.forEach(t=>{t.playerId===this.playerOne.matchWith&&(this.playerTwo=t)})}onRender(){return`
    <div id="main-side">
      <div id="counter"></div>
      <div id="main-top">
        <div id="top-panel">
          <a class="link" id="rules">Game rules</a>
          <div id="rulesEN" class="overlay">
            <div class="rulesPopupEN">
              <h2 id="rulesResultEN">
                Game rules<a class="link close closeEN">\xD7</a>
              </h2>
              <ul class="list-style">
                <li>Each player is dealt 10 marbles at the start.</li>
                <li>
                  There are only 2 players (i.e./ 'Hider' and 'Guesser').
                  Players change roles after each round.
                </li>
                <li>
                  Objective of the game is to collect all of your opponent\u2019s
                  marbles.
                </li>
                <li>
                  Each round, players have to pick a number from 1 to 10 from
                  their stack. Guesser's objective is to correctly predict if
                  Hider's number is odd or even.
                </li>
                <li>
                  The prize is determined by the amount of marbles Guesser
                  wagered.
                </li>
                <li>
                  Example 1: Hider chooses 3 marbles; Guesser correctly reckons
                  that his opponent would choose an odd number and bets 2.
                  Result: Guesser wins 2 marbles.
                </li>
                <li>
                  Example 2: Hider picks 5 marbles, Guesser wagers 8 and guesses
                  incorrectly. Results: Guesser loses 8 marbles.
                </li>
                <li>
                  If one of the Players is left with only 1 marble, he can only
                  assume the Guesser role.
                </li>
              </ul>
            </div>
          </div>
          <div id="rulesRU" class="overlay">
            <div class="rulesPopupRU">
              <h2 id="rulesResultRU">
                \u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438\u0433\u0440\u044B<a class="link close closeRU">\xD7</a>
              </h2>
              <ul class="list-style">
                <li>\u0412 \u043D\u0430\u0447\u0430\u043B\u0435 \u0438\u0433\u0440\u044B \u043A\u0430\u0436\u0434\u044B\u0439 \u0438\u0433\u0440\u043E\u043A \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 10 \u0448\u0430\u0440\u043E\u0432.</li>
                <li>
                  \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E 2 \u0438\u0433\u0440\u043E\u043A\u0430 - \u041E\u0442\u0433\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u0438 \u0417\u0430\u0433\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0438\u0439.
                  \u0418\u0433\u0440\u043E\u043A\u0438 \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u0440\u043E\u043B\u044F\u043C\u0438 \u043F\u043E\u0441\u043B\u0435 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0440\u0430\u0443\u043D\u0434\u0430.
                </li>
                <li>\u0426\u0435\u043B\u044C \u0438\u0433\u0440\u044B - \u0432\u044B\u0438\u0433\u0440\u0430\u0442\u044C \u0432\u0441\u0435 \u0448\u0430\u0440\u044B \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430.</li>
                <li>
                  \u0412 \u043D\u0430\u0447\u0430\u043B\u0435 \u0440\u0430\u0443\u043D\u0434\u0430 \u0417\u0430\u0433\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442 \u0447\u0438\u0441\u043B\u043E \u0448\u0430\u0440\u043E\u0432 \u043E\u0442 1 \u0434\u043E 10.
                  \u0426\u0435\u043B\u044C \u041E\u0442\u0433\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0435\u0433\u043E - \u0440\u0430\u0437\u0433\u0430\u0434\u0430\u0442\u044C \u0437\u0430\u043C\u044B\u0441\u0435\u043B \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430 (\u0447\u0435\u0442\u043D\u043E\u0435 \u0438\u043B\u0438
                  \u043D\u0435\u0447\u0435\u0442\u043D\u043E\u0435).
                </li>
                <li>
                  \u041F\u0440\u0438\u0437 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0440\u0430\u0443\u043D\u0434\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C \u0441\u0442\u0430\u0432\u043A\u0438
                  \u041E\u0442\u0433\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0435\u0433\u043E.
                </li>
                <li>
                  \u041F\u0440\u0438\u043C\u0435\u0440 1: \u0417\u0430\u0433\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442 3 \u0448\u0430\u0440\u0430. \u041E\u0442\u0433\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0438\u0439
                  \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442, \u0447\u0442\u043E \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A \u0432\u044B\u0431\u0440\u0430\u043B \u043D\u0435\u0447\u0435\u0442\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u0438 \u0434\u0435\u043B\u0430\u0435\u0442
                  \u0441\u0442\u0430\u0432\u043A\u0443 \u0432 2 \u0448\u0430\u0440\u0430. \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: \u041E\u0442\u0433\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u0432\u044B\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442 2 \u0448\u0430\u0440\u0430.
                </li>
                <li>
                  \u041F\u0440\u0438\u043C\u0435\u0440 2: \u0417\u0430\u0433\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442 5 \u0448\u0430\u0440\u043E\u0432. \u041E\u0442\u0433\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0438\u0439
                  \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442, \u0447\u0442\u043E \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A \u0432\u044B\u0431\u0440\u0430\u043B \u0447\u0435\u0442\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u0438 \u0441\u0442\u0430\u0432\u0438\u0442 8
                  \u0448\u0430\u0440\u043E\u0432. \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: \u0417\u0430\u0433\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u0432\u044B\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442 8 \u0448\u0430\u0440\u043E\u0432.
                </li>
                <li>
                  \u0415\u0441\u043B\u0438 \u0443 \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u0437 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E 1 \u0448\u0430\u0440, \u043E\u043D \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C
                  \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0440\u043E\u043B\u0438 \u041E\u0442\u0433\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0435\u0433\u043E.
                </li>
              </ul>
            </div>
          </div>
          <div id="top-panel-right">
            <div>
              <input id="language-switch" type="checkbox" />
              <label id="language" for="language-switch">
                <span></span>
                <div class="hidden" id="ru">RU</div>
                <div id="en">EN</div>
              </label>
            </div>
            <button id="play">
              <svg
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="currentcolor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.9167 13.875V1.50001C22.9157 1.33103 22.8668 1.16439 22.7736 1.01248C22.6804 0.860566 22.5453 0.727277 22.3783 0.622509C22.2137 0.516783 22.0214 0.441692 21.8155 0.402755C21.6096 0.363818 21.3953 0.362025 21.1883 0.397509L8.43833 2.64751C8.12358 2.70388 7.84248 2.84388 7.64155 3.04436C7.44061 3.24484 7.33188 3.49378 7.33333 3.75001V13.1325C6.36622 12.7699 5.27713 12.6662 4.22946 12.8368C3.18179 13.0074 2.23203 13.4431 1.52264 14.0787C0.813261 14.7143 0.382514 15.5153 0.29502 16.3618C0.207527 17.2082 0.468005 18.0544 1.03738 18.7733C1.60675 19.4922 2.45432 20.0451 3.45294 20.3491C4.45155 20.6531 5.54736 20.6918 6.57598 20.4593C7.60461 20.2268 8.51057 19.7357 9.15798 19.0597C9.80538 18.3837 10.1593 17.5593 10.1667 16.71C10.1813 16.5152 10.1813 16.3198 10.1667 16.125V4.65001L20.0833 2.90626V10.8825C19.1157 10.5197 18.0259 10.416 16.9777 10.587C15.9295 10.758 14.9795 11.1944 14.2703 11.8307C13.561 12.4671 13.1309 13.2689 13.0445 14.1159C12.9581 14.9629 13.2201 15.8093 13.791 16.528C14.362 17.2467 15.2112 17.7988 16.2111 18.1016C17.2109 18.4043 18.3075 18.4413 19.3361 18.2069C20.3647 17.9726 21.2697 17.4796 21.9154 16.8019C22.561 16.1242 22.9124 15.2985 22.9167 14.4488C22.9301 14.2577 22.9301 14.0661 22.9167 13.875Z"
                  fill="currentcolor"
                />
              </svg>
            </button>
            <audio
              loop
              id="music"
              src="/audios/TheFatRat-Monody.mp3"
            ></audio>
          </div>
        </div>
        <div id="top-header">
          <div>MAGIC</div>
          <div>MARBLE</div>
        </div>
        <img id="img-mobile" src="/images/central-logo.svg" alt="" />
        <img id="img-wide" src="/images/renewed-logo.svg" alt="" />
      </div>
      <div id="main-bot">
        <div id="bot-left">
          <div id="layer-p2">
            <div class="info">
              <div class="name two">Player 2</div>
              <div class="role two">Guesser</div>
            </div>
            <div class="score two">12</div>
            <div class="marbles two">
              <div class="marble"></div>
              <div class="marble"></div>
              <div class="marble"></div>
              <div class="marble"></div>
              <div class="marble"></div>
              <div class="marble"></div>
              <div class="marble"></div>
              <div class="marble"></div>
              <div class="marble"></div>
              <div class="marble"></div>
              <div class="marble"></div>
              <div class="marble"></div>
            </div>
          </div>
          <div id="layer-p1">
            <div class="info">
              <div class="name one">Player 1</div>
              <div class="role one">Hider</div>
            </div>
            <div class="score one">8</div>
            <div class="marbles one">
              <div class="marble"></div>
              <div class="marble"></div>
              <div class="marble"></div>
              <div class="marble"></div>
              <div class="marble"></div>
              <div class="marble"></div>
              <div class="marble"></div>
              <div class="marble"></div>
            </div>
          </div>
          <div id="layer-bet">
            <div class="wrapper">
              <input id="bet-type" value="even" type="checkbox" />
              <label id="bet" for="bet-type">
                <span></span>
              </label>
              <div id="even">Even</div>
              <div id="odd">Odd</div>
            </div>
            <input
              id="bet-amount"
              type="range"
              min="1"
              max="10"
              step="1"
              list="tickmarks"
              value="1"
            />
            <datalist id="tickmarks">
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
              <option value="4"></option>
              <option value="5"></option>
              <option value="6"></option>
              <option value="7"></option>
              <option value="8"></option>
              <option value="9"></option>
              <option value="10"></option>
            </datalist>
            <div id="bet-ticks">
              <div class="tick one ticked">
                <div class="number">1</div>
                <div></div>
              </div>
              <div class="tick two">
                <div class="number">2</div>
                <div></div>
              </div>
              <div class="tick three">
                <div class="number">3</div>
                <div></div>
              </div>
              <div class="tick four">
                <div class="number">4</div>
                <div></div>
              </div>
              <div class="tick five">
                <div class="number">5</div>
                <div></div>
              </div>
              <div class="tick six">
                <div class="number">6</div>
                <div></div>
              </div>
              <div class="tick seven">
                <div class="number">7</div>
                <div></div>
              </div>
              <div class="tick eight">
                <div class="number">8</div>
                <div></div>
              </div>
              <div class="tick nine">
                <div class="number">9</div>
                <div></div>
              </div>
              <div class="tick ten">
                <div class="number">10</div>
                <div></div>
              </div>
            </div>
            <button class="game-button" id="submit">Submit</button>
          </div>
        </div>
        <div id="bot-right">
          <div id="layer-stats">
            <div id="stats-left">
              <div id="tournament-info">
                <div id="tournament-name">Tournament</div>
                <div id="tournament-prize">
                  <div id="tournament-prize-sum">20000</div>
                  <div id="tournament-prize-currency">USDT</div>
                </div>
                <div>Prize</div>
              </div>
              <div id="tournament-stats">
                <div class="tournament-stats">
                  <div id="current-round">9</div>
                  <div>Current round</div>
                </div>
                <div class="tournament-stats">
                  <div id="rounds-to-prize">6</div>
                  <div>Rounds to prize</div>
                </div>
                <div class="tournament-stats">
                  <div id="number-of-players">1024</div>
                  <div>Number of players</div>
                </div>
              </div>
            </div>
            <div id="stats-right">
              <div class="stats-line one">
                <div class="pointer">You are here</div>
                <div class="amount">20k</div>
              </div>
              <div class="stats-line  two">
                <div class="pointer">You are here</div>
                <div class="amount">10k</div>

              </div>
              <div class="stats-line three">
                <div class="pointer">You are here</div>
                <div class="amount">5k</div>

              </div>
              <div class="stats-line four">
                <div class="pointer">You are here</div>

              </div>
              <div class="stats-line five">
                <div class="pointer">You are here</div>

              </div>
              <div class="stats-line six">
                <div class="pointer">You are here</div>

              </div>
              <div class="stats-line seven">
                <div class="pointer">You are here</div>

              </div>
              <div class="stats-line eight">
                <div class="pointer">You are here</div>

              </div>
              <div class="stats-line nine">
                <div class="pointer current">You are here</div>

              </div>
            </div>
          </div>
          <div id="layer-chat" class="down">
            <img class="swipe-img" src="/icons/arrow.svg" alt="" />
            <div class="swipe-info">Swipe up to see history and chat</div>
            <div id="logs" class="chat-info"></div>
            <div class="chat-prompt">
              <div>
                <input
                  id="message"
                  type="text"
                  placeholder="Tap to send a message"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="popup" class="hidden">
        <div id="popupResult">
        </div>
      </div>
    </div>
    `}}let S=new le,U=new de,R=new ce,Ce=new ue,A=new me,O=new pe,z=new ge,j=new ye,G=new he,N=new xe,q=new be,F=new ve,Y=new fe,W=new we,V=new ke,_=new Te,J=new Le,K=new Ee,Z=new Me,Q=new $e,X=new Be,ee=new Ie,te=new Pe,ae=new De;const L=oe(API_URL,{transports:["websocket"]});L.on("connect",()=>{console.log("Connected to server"),SetSocket(L),se(),I()});L.on("notify",r=>{console.log("notify",r),window.open(`${WEB_URL}/games/marblesgame?id=${r.tournamentId}`,"_blank")?window.focus():alert(`Windows blocked to open new tab. Link is: ${WEB_URL}/games/marblesgame?id=${r.tournamentId}`),alert("Your tournament has been lived.")});L.on("disconnect",()=>{console.log("Disconnected from server"),SetSocket(null),I()});function I(){const r=document.querySelector("#status");r&&(GetSocket()!=null?r.innerHTML='<i class="fa-solid fa-wifi"></i>':r.innerHTML='<i class="fa-solid fa-wifi-slash"></i>')}function se(){let r=window.location.pathname;S.urls.includes(r)?u(S):U.urls.includes(r)?u(U):R.urls.includes(r)?u(R):A.urls.includes(r)?u(A):O.urls.includes(r)?u(O):z.urls.includes(r)?u(z):j.urls.includes(r)?u(j):G.urls.includes(r)?u(G):N.urls.includes(r)?u(N):q.urls.includes(r)?u(q):F.urls.includes(r)?u(F):Y.urls.includes(r)?u(Y):W.urls.includes(r)?u(W):V.urls.includes(r)?u(V):_.urls.includes(r)?u(_):J.urls.includes(r)?u(J):K.urls.includes(r)?u(K):Z.urls.includes(r)?u(Z):Q.urls.includes(r)?u(Q):X.urls.includes(r)?u(X):ee.urls.includes(r)?u(ee):te.urls.includes(r)?u(te):ae.urls.includes(r)?u(ae):u(Ce),I()}function u(r){document.querySelector("#app").innerHTML=r.onRender(),r.onLoad()}window.onpopstate=se;
