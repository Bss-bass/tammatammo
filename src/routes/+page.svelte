<script>
    let congreat1 = false;
</script>

<body>
    <div
        class="items-center bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 w-full h-[193px] rounded-md mt-4"
    >
        <div class="grid grid-cols-4 gap-3">
            <img src="monk01.jpg" alt="" class="" />
            <img src="monk02.jpg" alt="" class="" />
            <img src="monk03.jpg" alt="" class="" />
            <img src="monk04.jpg" alt="" class="" />
        </div>
    </div>

    <div class="px-6">
        <div
            class="bg-[#ECB03C]/80 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 w-full h-[220px] rounded-md mt-3"
        >
            <div class="font-koho text-6xl text-white">
                ยินดีต้อนรับเข้าสู่...ธรรมมะ ธรรมโม
            </div>
            <br />
            <div class="font-koho text-4xl text-white">
                หลักธรรมของพระพุทธศาสนาครบ...จบ...ในที่เดียว
            </div>
            <br />
            <div>
                <a href="/ariyasudfour">
                    <button
                        class="bg-white text-[#ECB03C] w-[200px] h-[53px] text-2xl transition-all duration-500 hover:transform hover:scale-105 active:transform active:scale-95 active:rotate-1.7"
                    >
                        เริ่มเลย
                    </button>
                </a>
            </div>
        </div>
    </div>

    <div class="card-container">
        <a href="/ariyasudfour" class="">
            <div class="flex card">
                <div class="text-white justify-center items-center text-6xl">
                    <h1>อริยสัจ4</h1>
                </div>
            </div>
        </a>

        <div class="flex card">
            <div class="text-white justify-center items-center text-6xl">
                {#if congreat1 == false}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="80"
                        viewBox="0 0 24 24"
                        ><path
                            fill="currentColor"
                            d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm0-2h12V10H6zm6-3q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6zM6 20V10z"
                        /></svg
                    >
                {:else}
                    <div
                        class="text-white justify-center items-center text-6xl"
                    >
                        <h1>โอวาท4</h1>
                    </div>
                {/if}
            </div>
        </div>

        <div class="flex card">
            <div class="text-white justify-center items-center text-6xl">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    ><path
                        fill="currentColor"
                        d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm0-2h12V10H6zm6-3q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6zM6 20V10z"
                    /></svg
                >
            </div>
        </div>
        <div class="flex card">
            <div class="text-white justify-center items-center text-6xl">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    ><path
                        fill="currentColor"
                        d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm0-2h12V10H6zm6-3q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6zM6 20V10z"
                    /></svg
                >
            </div>
        </div>
    </div>
</body>

<style>
    .card-container {
        display: flex;
        padding-right: 50px;
        gap: 1px;
    }

    body {
        background-image: url("bg2.jpg");
        background-size: cover;
    }
    .card {
        box-sizing: border-box;
        width: 443px;
        height: 393px;

        background: #ecb03ccc;

        border: 1px solid white;
        box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
        backdrop-filter: blur(6px);
        border-radius: 17px;
        text-align: center;
        cursor: pointer;
        transition: all 0.5s;

        align-items: center;
        justify-content: center;
        user-select: none;
        font-weight: bolder;
        color: black;
        margin-left: 50px;
        margin-top: 20px;
        gap: 3px;
    }

    .card:hover {
        border: 1px solid black;
        transform: scale(1.05);
    }

    .card:active {
        transform: scale(0.95) rotateZ(1.7deg);
    }
</style>
