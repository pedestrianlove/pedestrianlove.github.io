<script>
    import "../css/app.css";
    import Github_Icon from "../assets/images/github/github-mark-white.svg"
</script>

<div class="flex flex-col h-screen justify-between">
    <header class="w-full h-auto py-3 bg-gray-700 text-white">
        <nav class="grid-cols-3 grid">
            <div>
                <a class="text-3xl font-mono" href="/">The Blog</a>
            </div>
            <div>
                <a class="text-xl px-5 h-20" href="/">Home</a>
                <a class="text-xl px-5 h-20" href="/blog">Blog</a>
                <a class="text-xl px-5 h-20" href="/about">About</a>
            </div>
            <div>
                <div class="items-end justify-items-end">
                    <a class="right-0" href="https://github.com/pedestrianlove/">
                        <img src={Github_Icon} alt="github-logo" class="h-10 w-auto">
                    </a>
                </div>
            </div>
        </nav>
    </header>

    <main class="mb-auto h-full">
        <slot />
    </main>

    <footer class="w-full h-auto bg-gray-700">
        <div class="text-white text-center font-mono text-xl ">
            Email: jsli@linux.com
        </div>
    </footer>
</div>
