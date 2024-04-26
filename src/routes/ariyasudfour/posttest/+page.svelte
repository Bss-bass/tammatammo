<script>
    import data from "$lib/Tharm.json"; //ดึงข้อมูลจาก json

    const { topic, content } = data.lesson_1; //เข้าถึงobj
    const { question, choice, correct, score } = data.lesson_1.exam;

    let less1ex = data.lesson_1.exam; //แทนค่าobj

    let rad = [undefined, undefined, undefined, undefined, undefined];

    let total = 0;

    // export let congreat = true;

    //exam func
    function checkexam() {
        for (let i = 0; i < 5; i++) {
            if (rad[i] == less1ex[i].correct) {
                total += 1;
            }
        }
        if (total == 5) {
            openLootBox();
        } else {
            alert("ทำยังไม่ถูกทุกข้อ ทำใหม่นะ");
            modal = true;
            refreshPage();
        }
    }

    //กดแล้วเลื่อน

    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute("href"));
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth",
        });
    }

    //เก็บข้อมูลของสุ่ม
    let charm = [
        {
            name: "ตะกรุด",
            rarity: "Common",
            image: "/takud.jpg",
        },
        {
            name: "ถุงผ้าบุดด้า",
            rarity: "Common",
            image: "/bag1.jpg",
        },
        {
            name: "หลวงปู่ทวด",
            rarity: "Uncommon",
            image: "/bag2.jpg",
        },
        {
            name: "หลวงปู่เค็ม",
            rarity: "Rare",
            image: "/MonkeySALT.jpg",
        },
        {
            name: "น้องไนซ์เชื่อมจิต",
            rarity: "Epic",
            image: "/lukpacum.jpg",
        },
        {
            name: "ตะกรุด",
            rarity: "Legendary",
            image: "takud.jpg",
        },
        {
            name: "ที่พรมน้ำมนต์สุดเทพ",
            rarity: "Legendary",
            image: "/maiprom.jpg",
        },
    ];

    //Random
    let selectedItem = null;
    let showModal = false;
    let modal = false;

    function openLootBox() {
        const probabilities = {
            Common: 0.6,
            Uncommon: 0.25,
            Rare: 0.1,
            Epic: 0.035,
            Legendary: 0.015,
        };

        const randomValue = Math.random();
        let cumulativeProbability = 0;

        for (const item of charm) {
            cumulativeProbability += probabilities[item.rarity];
            if (randomValue < cumulativeProbability) {
                selectedItem = item;
                showModal = true;
                return;
            }
        }
    }
</script>

<div
    class="flex w-full h-screen justify-between bg-[url(/monkey.jpg)] bg-cover"
>
    <div class="w-1/2 h-full flex justify-center">
        <div class="flex card h-screen overflow-x-scroll">
            <div class="text-white text-6xl">
                <div
                    class="examtopics text-[#F1B92E] text-3xl text-center font-Inria"
                >
                    <h1 class="text-[#F1B92E]">Topic Test</h1>
                    <div class="flex text-center justify-center font-koho">
                        <p class="text-[#F1B92E] text-lg">แบบทดสอบหลังศึกษา</p>
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="numberone text-[#F1B92E] text-2xl font-koho">
                        <h1 class="text-[#F1B92E]">
                            {less1ex[0].question}
                        </h1>
                        <div class="text-xl grid grid-col-1 gap-4">
                            <div>
                                <input
                                    type="radio"
                                    bind:group={rad[0]}
                                    value="0"
                                />
                                {less1ex[0].choice[0]}
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="false"
                                    bind:group={rad[0]}
                                    value="1"
                                />
                                {less1ex[0].choice[1]}
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="false"
                                    bind:group={rad[0]}
                                    value="2"
                                />
                                {less1ex[0].choice[2]}
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    id="false"
                                    bind:group={rad[0]}
                                    value="3"
                                />
                                {less1ex[0].choice[3]}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="numberone text-[#F1B92E] text-2xl font-koho">
                        <h1 class="text-[#F1B92E]">
                            {less1ex[1].question}
                        </h1>
                        <div class="text-xl grid grid-col-1 gap-2">
                            <div>
                                <input
                                    type="radio"
                                    id="false"
                                    bind:group={rad[1]}
                                    value="0"
                                />
                                {less1ex[1].choice[0]}
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="false"
                                    bind:group={rad[1]}
                                    value="1"
                                />
                                {less1ex[1].choice[1]}
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="false"
                                    bind:group={rad[1]}
                                    value="2"
                                />
                                {less1ex[1].choice[2]}
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    id="true"
                                    bind:group={rad[1]}
                                    value="3"
                                />
                                {less1ex[1].choice[3]}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="numberone text-[#F1B92E] text-2xl font-koho">
                        <h1 class="text-[#F1B92E]">
                            {less1ex[2].question}
                        </h1>
                        <div class="text-xl grid grid-col-1 gap-2">
                            <div>
                                <input
                                    type="radio"
                                    id="false"
                                    bind:group={rad[2]}
                                    value="0"
                                />
                                {less1ex[2].choice[0]}
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="false"
                                    bind:group={rad[2]}
                                    value="1"
                                />
                                {less1ex[2].choice[1]}
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="false"
                                    bind:group={rad[2]}
                                    value="2"
                                />
                                {less1ex[2].choice[2]}
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    id="true"
                                    bind:group={rad[2]}
                                    value="3"
                                />
                                {less1ex[2].choice[3]}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="numberone text-[#F1B92E] text-2xl font-koho">
                        <div class="text-xl grid grid-col-1 gap-4">
                            <h1 class="text-[#F1B92E]">
                                {less1ex[3].question}
                            </h1>
                            <div>
                                <input
                                    type="radio"
                                    id="false"
                                    bind:group={rad[3]}
                                    value="0"
                                />
                                {less1ex[3].choice[0]}
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="false"
                                    bind:group={rad[3]}
                                    value="1"
                                />
                                {less1ex[3].choice[1]}
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="true"
                                    bind:group={rad[3]}
                                    value="2"
                                />
                                {less1ex[3].choice[2]}
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    id="false"
                                    bind:group={rad[3]}
                                    value="3"
                                />
                                {less1ex[3].choice[3]}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="numberone text-[#F1B92E] text-2xl font-koho">
                        <h1 class="text-[#F1B92E]">{less1ex[4].question}</h1>
                        <div class="text-xl grid grid-col-1 gap-4">
                            <div>
                                <input
                                    type="radio"
                                    id="true"
                                    bind:group={rad[4]}
                                    value="0"
                                />
                                {less1ex[4].choice[0]}
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="false"
                                    bind:group={rad[4]}
                                    value="1"
                                />
                                {less1ex[4].choice[1]}
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="false"
                                    bind:group={rad[4]}
                                    value="2"
                                />
                                {less1ex[4].choice[2]}
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    id="false"
                                    bind:group={rad[4]}
                                    value="3"
                                />
                                {less1ex[4].choice[3]}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <button
                        class="bg-white mt-10 text-[#F1B92E] rounded-lg flex justify-center items-center font-Inria hover:transform hover:scale-105 active:transform active:scale-95 active:rotate-1.7 transition-all duration-500"
                        on:click={() => {
                            if (
                                rad[0] == undefined ||
                                rad[1] == undefined ||
                                rad[2] == undefined ||
                                rad[3] == undefined ||
                                rad[4] == undefined
                            ) {
                                alert("กรุณาตอบให้ครบทุกข้อ");
                            } else {
                                checkexam();
                            }
                        }}>Submit</button
                    >
                </div>
            </div>
        </div>
    </div>
    {#if showModal}
        <div
            class="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
        >
            <div class="bg-white p-8 rounded-lg text-center">
                <h2 class="text-2xl font-bold mb-4">{selectedItem.name}</h2>
                <h3 class="text-xl font-bold mb-4">{selectedItem.rarity}</h3>
                <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    class="mx-auto mb-4 max-w-xs"
                />
                <!--<p class="mb-4">{selectedItem.description}</p>-->
                <a href="/">
                    <button
                        class="px-4 py-2 bg-blue-500 text-white rounded"
                        on:click={() => (showModal = false)}>Close</button
                    >
                </a>
            </div>
        </div>
    {:else if modal}
        <div
            class="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
        >
            <div>
                <p class="text-9xl text-white font-Inria">
                    คุณยังเข้าไม่ถึงพระธรรมที่แท้จริง!
                </p>
                <div class="flex justify-center">
                    <a href="/ariyasudfour">
                        <button
                            class="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-500 hover:transform hover:scale-105 active:transform active:scale-95 active:rotate-1.7"
                            on:click={() => (showModal = false)}
                            >Back To Learn More</button
                        >
                    </a>
                </div>
            </div>
        </div>
    {/if}
    <div class="w-1/2 h-full flex justify-center">
        <div class="flex card h-screen overflow-x-scroll">
            <div class="text-white text-3xl">
                <div class="examtopics">
                    <h1 class="text-[#F1B92E] text-3xl text-center font-Inria">
                        Reward
                    </h1>
                    <div class="flex text-center justify-center font-koho">
                        <p class="text-[#F1B92E] text-lg">รางวัล</p>
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="numbertwo">
                        <div
                            class="flex justify-center text-[#F1B92E] text-2xl font-koho"
                        >
                            AMULET, TALISMAN
                        </div>
                        <div
                            class="flex justify-center text-[#F1B92E] text-lg font-koho"
                        >
                            เครื่องราง, ของขลัง
                        </div>
                        <div class="flex gap-3 px-2">
                            <div
                                class="bg-[#F1B92E] w-[290px] h-[330px] rounded-x"
                            >
                                <div class="flex justify-center py-2">
                                    <img
                                        src="/Monkeyeiei.jpg"
                                        alt=""
                                        class="bg-black w-[180px] h-[156px] shadow-lg shadow-black object-cover"
                                    />
                                </div>
                                <div class="flex justify-center">
                                    <h1
                                        class="text-xl font-koho text-[#FCF1D5] ;
                                    "
                                    >
                                        หลวงปู่ทวด
                                    </h1>
                                </div>
                                <div
                                    class="flex justify-center mt-8 items-center"
                                >
                                    <h1
                                        class="text-lg font-koho text-[#FCF1D5]"
                                    >
                                        เหยียบน้ำเค็มเป็นน้ำจืด
                                    </h1>
                                </div>
                            </div>

                            <div
                                class="bg-[#F1B92E] w-[290px] h-[330px] rounded-x"
                            >
                                <div class="flex justify-center py-2">
                                    <img
                                        src="/Monkrai.jpg"
                                        alt=""
                                        class="bg-black w-[180px] h-[156px] shadow-lg shadow-black object-cover"
                                    />
                                </div>
                                <div class="flex justify-center">
                                    <h1
                                        class="text-xl font-koho text-[#FCF1D5] ;
                                    "
                                    >
                                        หลวงปู่เค็ม
                                    </h1>
                                </div>
                                <div
                                    class="flex justify-center mt-8 items-center"
                                >
                                    <h1
                                        class="text-lg font-koho text-[#FCF1D5] text-center"
                                    >
                                        ลุยน้ำ ลุยไฟ
                                        แล้วเมื่อไหร่จะได้ลุยหัวใจเธอ
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="numbertwo">
                        <div
                            class="flex justify-center text-[#F1B92E] text-2xl font-koho"
                        >
                            AMULET, TALISMAN
                        </div>
                        <div
                            class="flex justify-center text-[#F1B92E] text-lg font-koho"
                        >
                            เครื่องราง, ของขลัง
                        </div>
                        <div class="flex gap-3 px-2">
                            <div
                                class="bg-[#F1B92E] w-[290px] h-[330px] rounded-x"
                            >
                                <div class="flex justify-center py-2">
                                    <img
                                        src="/lukpacum.jpg"
                                        alt=""
                                        class="bg-black w-[180px] h-[156px] shadow-lg shadow-black object-cover"
                                    />
                                </div>
                                <div class="flex justify-center">
                                    <h1
                                        class="text-xl font-koho text-[#FCF1D5] ;
                                    "
                                    >
                                        ลูกประคำ
                                    </h1>
                                </div>
                                <div
                                    class="flex justify-center mt-8 items-center"
                                >
                                    <h1
                                        class="text-lg font-koho text-[#FCF1D5] text-center"
                                    >
                                        อ่านหนังสือจนค่ำ
                                        ดันมาแพ้เพื่อนใช้ประคำหรือนี่
                                    </h1>
                                </div>
                            </div>

                            <div
                                class="bg-[#F1B92E] w-[290px] h-[330px] rounded-x"
                            >
                                <div class="flex justify-center py-2">
                                    <img
                                        src="/takud.jpg"
                                        alt=""
                                        class="bg-black w-[180px] h-[156px] shadow-lg shadow-black object-cover"
                                    />
                                </div>
                                <div class="flex justify-center">
                                    <h1
                                        class="text-xl font-koho text-[#FCF1D5] text-center ;
                                    "
                                    >
                                        ตะกรุด
                                    </h1>
                                </div>
                                <div
                                    class="flex justify-center mt-8 items-center"
                                >
                                    <h1
                                        class="text-lg font-koho text-[#FCF1D5] text-center"
                                    >
                                        ตะกรุดวิเศษบอกข้าเถิด ใครงามเลิศในปฐพี
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="numbertwo">
                        <div
                            class="flex justify-center text-[#F1B92E] text-2xl font-koho"
                        >
                            Cloth Bag
                        </div>
                        <div
                            class="flex justify-center text-[#F1B92E] text-lg font-koho"
                        >
                            ถุงผ้า
                        </div>
                        <div class="flex gap-3 px-2">
                            <div
                                class="bg-[#F1B92E] w-[290px] h-[330px] rounded-x"
                            >
                                <div class="flex justify-center py-2">
                                    <img
                                        src="/bag1.jpg"
                                        alt=""
                                        class="bg-black w-[180px] h-[156px] shadow-lg shadow-black object-cover"
                                    />
                                </div>
                                <div class="flex justify-center">
                                    <h1
                                        class="text-xl font-koho text-[#FCF1D5] ;
                                    "
                                    >
                                        ถุงผ้าเทพ
                                    </h1>
                                </div>
                                <div
                                    class="flex justify-center mt-8 items-center"
                                >
                                    <h1
                                        class="text-lg font-koho text-[#FCF1D5]"
                                    >
                                        ใส่ของแล้วของเป็นทอง
                                    </h1>
                                </div>
                            </div>

                            <div
                                class="bg-[#F1B92E] w-[290px] h-[330px] rounded-x"
                            >
                                <div class="flex justify-center py-2">
                                    <img
                                        src="/bag2.jpg"
                                        alt=""
                                        class="bg-black w-[180px] h-[156px] shadow-lg shadow-black object-cover"
                                    />
                                </div>
                                <div class="flex justify-center">
                                    <h1
                                        class="text-xl font-koho text-[#FCF1D5] ;
                                    "
                                    >
                                        ถุงผ้าบุดด้า
                                    </h1>
                                </div>
                                <div
                                    class="flex justify-center mt-8 items-center"
                                >
                                    <h1
                                        class="text-lg font-koho text-[#FCF1D5] text-center"
                                    >
                                        ใส่ของแล้วรับรู้ถึงธรรม
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="numbertwo">
                        <div
                            class="flex justify-center text-[#F1B92E] text-2xl font-koho"
                        >
                            Gadget
                        </div>
                        <div
                            class="flex justify-center text-[#F1B92E] text-lg font-koho"
                        >
                            อุปกรณ์ขั้นเทพ
                        </div>
                        <div class="flex gap-3 px-2">
                            <div
                                class="bg-[#F1B92E] w-[290px] h-[330px] rounded-x"
                            >
                                <div class="flex justify-center py-2">
                                    <img
                                        src="/bard.jpg"
                                        alt=""
                                        class="bg-black w-[180px] h-[156px] shadow-lg shadow-black object-cover"
                                    />
                                </div>
                                <div class="flex justify-center">
                                    <h1
                                        class="text-xl font-koho text-[#FCF1D5] ;
                                "
                                    >
                                        บาตร
                                    </h1>
                                </div>
                                <div
                                    class="flex justify-center mt-8 items-center"
                                >
                                    <h1
                                        class="text-lg font-koho text-[#FCF1D5]"
                                    >
                                        บาตรไว้บินทบาต อิอิ
                                    </h1>
                                </div>
                            </div>

                            <div
                                class="bg-[#F1B92E] w-[290px] h-[330px] rounded-x"
                            >
                                <div class="flex justify-center py-2">
                                    <img
                                        src="/maiprom.jpg"
                                        alt=""
                                        class="bg-black w-[180px] h-[156px] shadow-lg shadow-black object-cover"
                                    />
                                </div>
                                <div class="flex justify-center">
                                    <h1
                                        class="text-xl font-koho text-[#FCF1D5] ;
                                "
                                    >
                                        ที่พรมน้ำมนต์
                                    </h1>
                                </div>
                                <div
                                    class="flex justify-center mt-8 items-center"
                                >
                                    <h1
                                        class="text-lg font-koho text-[#FCF1D5] text-center"
                                    >
                                        เอาไปสาดน้ำเล่นสงกรานต์
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .card-container {
        flex: 1;
        max-width: 25%;
        padding-right: 10px;
        padding-left: 10px;
        box-sizing: border-box;
    }
    /* 
    body {
        background-image: url("./monkbg.jpg");
        background-size: cover;
    } */

    .card {
        box-sizing: border-box;
        width: 500px;
        height: 750px;

        background: #ecb03ccc;

        border: 1px solid white;
        box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
        backdrop-filter: blur(6px);
        border-radius: 17px;

        cursor: pointer;
        transition: all 0.5s;

        justify-content: center;
        user-select: none;
        font-weight: bolder;
        color: black;
        margin-top: 20px;
        gap: 3px;
    }

    .examtopics {
        box-sizing: border-box;
        width: 430px;
        height: 74px;
        background: #ffffff;
        opacity: 100%;
        border: 1px solid white;
        box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);

        border-radius: 17px;
        cursor: pointer;
        transition: all 0.5s;
        justify-content: center;
        user-select: none;
        font-weight: bolder;
        color: black;
        margin-top: 20px;
        gap: 3px;
    }

    .numberone {
        box-sizing: border-box;
        width: 430px;
        height: 211px;
        background: #ffffff;
        opacity: 100%;
        border: 1px solid white;
        box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);

        border-radius: 17px;
        cursor: pointer;
        transition: all 0.5s;
        justify-content: center;
        user-select: none;
        font-weight: bolder;
        color: black;
        margin-top: 20px;
        gap: 3px;
    }

    .numbertwo {
        box-sizing: border-box;
        width: 430px;
        height: 400px;
        background: #ffffff;
        opacity: 100%;
        border: 1px solid white;
        box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);

        border-radius: 17px;
        cursor: pointer;
        transition: all 0.5s;
        justify-content: center;
        user-select: none;
        font-weight: bolder;
        color: black;
        margin-top: 20px;
        gap: 3px;
    }
</style>
