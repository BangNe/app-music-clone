const btnPlay = document.querySelector('.control__select__btn .play')
const btnStop = document.querySelector('.control__select__btn .stop')
const btnNext = document.querySelector('.control__select__btn .next')
const btnBack = document.querySelector('.control__select__btn .back')
const btnRedo = document.querySelector('.control__select__btn .redo')
const btnRamdom = document.querySelector('.control__select__btn .ramdom')

const bigCD = document.querySelector('.right__music__playlist__img-avt')
const smallCD = document.querySelector('.control__info--img img')
const nameSong = document.querySelector('.control__info--name h3')
const nameSinge = document.querySelector('.control__info--name span')
const timeSong = document.querySelector('.control__select__time--right')
const lineTime = document.querySelector('.control__select__time__tree input')
const lineVol = document.querySelector('.control__volume--input input')

const iconVolFull = document.querySelector('.control__volume--icon .volume-full')
const iconVolMute = document.querySelector('.control__volume--icon .volume-mute')

const playList = document.querySelector('.right__music__playlist__list')

const audio = document.getElementById('audio')

let currentIndex = 0
let isPlaying = false
let isRamdom = false
let isRedo = false

const listSongs = [
    {
        id : 0,
        name : 'Cưới em',
        single : 'Bray',
        link : './music/cuoi_em.mp3',
        img : './img/cuoi_em.jpg',
        time : '3:29'
    },

    {   
        id: 1,
        name : 'Chuyến tàu',
        single : 'Bray',
        link : './music/chuyen_tau.mp3',
        img : './img/chuyen_tau.jpg',
        time : '3:14'
    },

    {
        id : 2,
        name : 'Vầng thái dương',
        single : 'Bray',
        link : './music/vang_thai_duong.mp3',
        img : './img/vang_thai_duong.jpg',
        time : '2:33'
    },

    {
        id: 3,
        name : 'Way back home',
        single : 'Bray',
        link : './music/way_back_home.mp3',
        img : './img/way_back_home.jpg',
        time : '3:04'
    },

    {
        id : 4,
        name : 'Một ngày khác',
        single : 'Bray',
        link : './music/mot_ngay_khac.mp3',
        img : './img/mot_ngay_khac.jpg',
        time : '2:55'
    },

    {
        id : 5,
        name : 'Ta có nên',
        single : 'Bray',
        link : './music/ta_co_nen.mp3',
        img : './img/ta_co_nen.jpg',
        time : '3:15'
    },

    {
        id : 6,
        name : 'J cole nói',
        single : 'Bray',
        link : './music/j_cole_noi.mp3',
        img : './img/j_cole_noi.jpg',
        time : '2:54'
    },
    
    {
        id : 7,
        name : 'Xin đừng đỗ lỗi hết cho bọn trẻ',
        single : 'Bray',
        link : './music/do_loi.mp3',
        img : './img/do_loi.jpg',
        time : '3:30'
    },
        
    {
        id : 8,
        name : 'Đêm nay',
        single : 'Bray',
        link : './music/dem_nay.mp3',
        img : './img/dem_nay.jpg',
        time : '3:55'
    },

    {
        id : 9,
        name : 'Thuốc lá & cà phê',
        single : 'Bray',
        link : './music/thuoc_la.mp3',
        img : './img/thuoc_la.jpg',
        time : '3:06'
    },

    {
        id : 10,
        name : 'Finale 2',
        single : 'Bray',
        link : './music/finale2.mp3',
        img : './img/finale2.jpg',
        time : '3:19'
    },
    
    {
        id : 11,
        name : 'Cưới thôi',
        single : 'Bray',
        link : './music/cuoi_thoi.mp3',
        img : './img/cuoi_thoi.jpg',
        time : '3:01'
    },
    
    {
        id : 12,
        name : 'Ở trong thành phố này',
        single : 'Bray',
        link : './music/thanh_pho.mp3',
        img : './img/thanh_pho.jpg',
        time : '3:05'
    },

    // {
    //     id : 13,
    //     name : 'Vẫn là bạn ',
    //     single : 'Hoàng bầu trời',
    //     link : './music/van_la_ban.mp3',
    //     img : './img/van_la_ban.jpg',
    //     time : '2:27'
    // },
]

function render() {
    const htmls = listSongs.map((song, index) => {
        return `
        <div class="right__music__playlist__song ${index === currentIndex ? 'active' : ''}" data-index = "${index}">
            <div class="right__music__playlist__song--info">
                <div class="right__music__playlist__song--info--img">
                    <img class="right__music__playlist__song--info--img--avt" src="${song.img}" alt="">
                    <img class="right__music__playlist__song--info--img--gif" src="https://phbao272.github.io/ZingMP3/assets/img/icon-playing.gif" alt="">
                </div>
                <div class="right__music__playlist__song--info--name">
                    <h3>${song.name}</h3>
                    <span>${song.single}</span>
                </div>
            </div>
            <div class="right__music__playlist__song--time">
                <span>${song.time}</span>
            </div>
            <div class="right__music__playlist__song--select">
                <i class='bx bxs-heart heart'></i>
                <i class='bx bx-dots-horizontal-rounded dot' ></i>
            </div>
        </div>
        `
    })
    document.querySelector('.right__music__playlist__list').innerHTML = htmls.join('')
}

function handleEvents() {
    btnPlay.onclick = function() {
        if(!isPlaying) {
            audio.play()
        }
    }

    btnStop.onclick = function() {
        if(isPlaying){
            audio.pause()
        }
    }

    audio.onplay = function() {
        isPlaying = true
        btnPlay.classList.remove('active')
        btnStop.classList.add('active')
        document.querySelector('.right__music__playlist__img').classList.add('active')
        document.querySelector('.control__info').classList.add('active')

    }

    audio.onpause = function() {
        isPlaying = false
        btnPlay.classList.add('active')
        btnStop.classList.remove('active')
        document.querySelector('.right__music__playlist__img').classList.remove('active')
        document.querySelector('.control__info').classList.remove('active')
    }

    audio.ontimeupdate = function() {
        timePercent = audio.currentTime/audio.duration *100
        lineTime.value = timePercent>0 ? timePercent : 0
        
    }

    lineTime.onchange = function(e) {
        const time = audio.duration / 100 * e.target.value
        audio.currentTime = time 
    }

    btnNext.onclick = function() {
        if(isRamdom){
            ramdomSong()
        }else{
            nextSong()
        }
        audio.play()
        render()
    }

    btnBack.onclick = function() {
        if(isRamdom){
            ramdomSong()
        }else{
            backSong()
        }
        audio.play()
        render()
    }

    btnRamdom.onclick  = function() {      
        isRamdom = !isRamdom
        btnRamdom.classList.toggle('active', isRamdom)
    }

    btnRedo.onclick  = function() {      
        isRedo = !isRedo
        btnRedo.classList.toggle('active', isRedo)
    }

    audio.onended = function() {
        if(isRedo) {
            audio.play()
        }else{
            btnNext.click()
        }
    }

    lineVol.onchange = function() {
        volPercent = lineVol.value/100
        audio.volume = volPercent

        if(audio.volume == 0) {
            iconVolFull.classList.remove('active')
            iconVolMute.classList.add('active')
        }else{
            iconVolFull.classList.add('active')
            iconVolMute.classList.remove('active')
        }
    }

    iconVolFull.onclick = function() {
        iconVolFull.classList.remove('active')
        iconVolMute.classList.add('active')
        audio.volume = 0
        lineVol.value = 0
    }

    iconVolMute.onclick = function() {
        iconVolFull.classList.add('active')
        iconVolMute.classList.remove('active')
        audio.volume = 1
        lineVol.value = 100
    }

    playList.onclick = function(e) {
        const songNode = e.target.closest('.right__music__playlist__song:not(.active)')
        if( songNode || 
        e.target.closest('.heart') ||
        e.target.closest('.dot')) {
            if(songNode) {
                currentIndex = Number(songNode.getAttribute('data-index'))
                loadingSong()
                render()
                audio.play()
            }
        }
    }
}

function loadingSong() {
    bigCD.src = getCurrentSong().img
    smallCD.src = getCurrentSong().img
    nameSong.textContent = getCurrentSong().name
    nameSinge.textContent = getCurrentSong().single
    timeSong.textContent = getCurrentSong().time
    audio.src = getCurrentSong().link
}

function nextSong() {
    currentIndex++
    if(currentIndex >= listSongs.length) {
        currentIndex = 0
    }
    loadingSong()
}

function backSong() {
    currentIndex--
    if(currentIndex < 0) {
        currentIndex = listSongs.length - 1
    }
    loadingSong()
}

function ramdomSong() {
    let newIndex
    do {
        newIndex = Math.floor(Math.random() * listSongs.length)
    }
    while(newIndex == currentIndex)
    currentIndex = newIndex
    loadingSong()
}

function FormatTime() {
}
FormatTime()

function getCurrentSong() {
    return listSongs[currentIndex]
}


function start() {
    render()
    handleEvents()
    loadingSong()
}
start()