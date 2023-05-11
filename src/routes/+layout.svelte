<script>
    import "../css/app.css";
</script>

<header class="w-full h-10 bg-gray-700">
    <nav class="grid-col-2 grid">
        <div class="flex">
            <a class="text-3xl" href="/">Surge and Sigh</a>
        </div>
        <div class="flex">
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>
    </nav>
</header>

<slot />

<footer>
    jsli@linux.com
</footer>