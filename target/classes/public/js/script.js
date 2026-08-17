/*
 * BRUNA FOSS WEBSITE
 * ---------------------------------------------------------
 * This is the main content file.
 *
 * To add/edit songs:
 * 1. Find the "tracks" array below.
 * 2. Change the title and duration.
 * 3. Add the Spotify/YouTube URLs when available.
 * 4. Add lyrics and meaning later.
 *
 * Images can be placed in:
 * /src/main/resources/public/images/
 */

const tracks = [
    {
        id: "nao-volto-mais",
        title: "Não Volto Mais",
        duration: "02:48",
        type: "Single",
        spotify: "https://open.spotify.com/track/1nUfGqamPrqUPlc3VDpBlR?si=XYduq1Z2StaiMNwL90q3WA&utm_source=native-share-menu",
        youtube: "https://youtu.be/0VF3i7EBD6I?is=rDfKvENzGq_DJJxl",
        image: "/images/nvm.jpg",
        lyrics: "Te vi ali\n" +
            "Olhares me perfuram sobre a mesa\n" +
            "Tudo começou assim\n" +
            "É fácil te encantar\n" +
            "Só ao sorrir\n" +
            "No fundo eu não sei se mereci\n" +
            "Por que se vai\n" +
            "Se cai sem sentir?\n" +
            "Meu amor vai\n" +
            "Tentar te destruir\n" +
            "Me escreva cartas, amor\n" +
            "Me lembre como era aqui\n" +
            "Mas não esqueça da dor\n" +
            "Que eu te causei ao partir\n" +
            "Pois eu não volto mais\n" +
            "Eu não volto mais\n" +
            "Por que se vai\n" +
            "Se cai sem sentir?\n" +
            "Deixe pra trás\n" +
            "O caos do nosso fim\n" +
            "Me escreva cartas amor\n" +
            "Me lembre como era aqui\n" +
            "Mas não esqueça da dor\n" +
            "Que eu te causei ao partir\n" +
            "Pois eu não volto mais\n" +
            "Não corra atrás\n" +
            "Eu não volto mais\n" +
            "Esqueça tudo, vá em paz\n" +
            "Eu não volto",
        meaning: "A canção retrata o término doloroso de um relacionamento e o processo de distanciamento definitivo entre duas pessoas. A letra explora a dualidade entre a nostalgia dos bons momentos do passado e a realidade implacável de que a relação se tornou destrutiva."
    },
    {
        id: "dont-change-your-mind",
        title: "Don't Change Your Mind",
        duration: "02:38",
        type: "Single",
        spotify: "https://open.spotify.com/track/0PfU0snh88jAb7N2WRpyGK?si=L43r70CYSxexd4wTYO9ULQ&utm_source=native-share-menu",
        youtube: "https://youtu.be/1X9L-s6z-jE?is=XlgNRFiHWpJNr6ls",
        image: "/images/mind.jpg",
        lyrics: "Please, don't change your mind\n" +
            "Please, don't change your mind\n" +
            "Not tonight, yeah\n" +
            "I wanna show my love for you\n" +
            "I wanna hold you tight\n" +
            "I wanna make breakfast for you\n" +
            "And stay until the next moonlight\n" +
            "You think it makes sense, right?\n" +
            "You'll say I'm worth a try\n" +
            "And I don't need you to be confident\n" +
            "'Cause I know you're mine, so\n" +
            "Please, don't change your mind\n" +
            "Don't say goodbye\n" +
            "I'm yours\n" +
            "For life\n" +
            "For life\n" +
            "For life\n" +
            "For life\n" +
            "Eu te avisei\n" +
            "Não sou de ninguém\n" +
            "Mas só você quer o que eu quero também\n" +
            "Me fala onde \"cê\" tá\n" +
            "Que eu vou avaliar\n" +
            "Quanto tempo tenho pra te amar, mulher\n" +
            "Please, don't change your mind\n" +
            "Don't waste my time\n" +
            "I'm yours\n" +
            "Tonight\n" +
            "Tonight\n" +
            "Tonight\n" +
            "Tonight\n" +
            "Eu te amo\n" +
            "Meu amor, eu sei\n" +
            "Eu sei que eu falhei mas\n" +
            "I just wish we could\n" +
            "Remain the same\n" +
            "Não esquece de não me esquecer, vai\n" +
            "Please, don't change your mind\n" +
            "Don't say goodbye\n" +
            "I'm yours\n" +
            "For life (tonight)\n" +
            "For life (tonight)\n" +
            "For life\n" +
            "For life",
        meaning: "A canção mistura versos em inglês e português para retratar a vulnerabilidade, a intensidade de um vínculo afetivo e o desejo profundo de permanência em um relacionamento."
    },
    {
        id: "americana",
        title: "Americana",
        duration: "02:58",
        type: "Single · Debut EP",
        spotify: "https://open.spotify.com/track/2AXOKDQuXVhD15uZTgo1zG?si=2A219_mwTL2sRDMWx0FZIA&utm_source=native-share-menu",
        youtube: "https://youtu.be/KMBD1i9pDOE?is=MJRNhWF2bm9m0jBq",
        image: "/images/americana.jpg",
        lyrics: "Sem rumo atravesso o céu e o mar\n" +
            "Te encontro bem no caos do samba\n" +
            "A paz não me procura\n" +
            "Mas o teu canto me chama, me chama\n" +
            "\n" +
            "Você é meio diferente\n" +
            "Cultura, gosto, altura e tom\n" +
            "Depressa meu corpo te entende\n" +
            "Sem precisar de tradução\n" +
            "\n" +
            "Menina\n" +
            "Americana Linda\n" +
            "Me deixa sem saída\n" +
            "Me faz querer ficar\n" +
            "\n" +
            "Gringa dos olhos castanhos\n" +
            "Vem ouvir Caetano e Gil\n" +
            "O mundo é grande mas dei sorte\n" +
            "De nascer bem no Brasil\n" +
            "Aquele abraço pros States\n" +
            "Mas eu sou da MPB\n" +
            "E como já diria Elis\n" +
            "Só tinha de ser com você\n" +
            "\n" +
            "Eu sei que eu sou diferente\n" +
            "Cultura, gosto, altura e tom\n" +
            "Depressa teu corpo me entende\n" +
            "Sem precisar de tradução\n" +
            "\n" +
            "Menina\n" +
            "Americana Linda\n" +
            "Me deixa sem saída\n" +
            "Me faz querer ficar\n" +
            "Menina\n" +
            "Me beija em outra língua\n" +
            "Me deixa sem saída\n" +
            "Agora eu vou ficar\n" +
            "\n" +
            "Amor, i want you\n" +
            "Only you\n" +
            "Can't ya tell\n" +
            "Amor, i need you\n" +
            "Only you\n" +
            "Yeah i fell\n" +
            "For you\n" +
            "Yeah i fell",
        meaning: "A canção explora um romance intercultural e a atração magnética entre pessoas de origens diferentes, misturando referências profundas da música popular brasileira com o cenário de um relacionamento afetivo."
    }
];
/* ---------------------------------------------------------
   EXTRA CONTENT
--------------------------------------------------------- */

const extras = [
    {
        type: "video",
        title: "Bruna Foss — Americana | Diário de Gravação",
        category: "CONTEÚDO EXTRA",
        year: "2026",
        date: "2026-08-15",
        youtubeId: "sXfN0Yq4V4Q",
        image: "https://img.youtube.com/vi/sXfN0Yq4V4Q/maxresdefault.jpg",
        url: "https://youtu.be/sXfN0Yq4V4Q"
    },

    {
        type: "article",
        title: "Bruna Foss fala sobre carreira e lançamento de “Americana”",
        category: "MATÉRIA",
        year: "2026",
        date: "2026-08-10",
        image: "/images/rosto.jpg",
        url: "https://www.bandab.com.br/cultura/musica/bruna-foss-carreira-americana/"
    },

    {
        type: "video",
        title: "Bruna Foss — Os bastidores da mente de uma artista",
        category: "ENTREVISTA",
        year: "2026",
        date: "2026-07-20",
        youtubeId: "rW1e6ZoSnsQ",
        image: "https://img.youtube.com/vi/rW1e6ZoSnsQ/maxresdefault.jpg",
        url: "https://youtu.be/rW1e6ZoSnsQ"
    },

    {
        type: "video",
        title: "Bruna Foss — Não volto mais | A short film",
        category: "CONTEÚDO EXTRA",
        year: "2025",
        date: "2025-10-01",
        youtubeId: "uibvGg7bw1U",
        image: "https://img.youtube.com/vi/uibvGg7bw1U/maxresdefault.jpg",
        url: "https://youtu.be/uibvGg7bw1U"
    },

    {
        type: "video",
        title: "Bruna Foss — No Oitavo conhecendo Bruna Foss",
        category: "ENTREVISTA",
        year: "2023",
        date: "2023-08-01",
        youtubeId: "KdsywPhWgwk",
        image: "https://img.youtube.com/vi/KdsywPhWgwk/maxresdefault.jpg",
        url: "https://youtu.be/KdsywPhWgwk"
    },

    {
        type: "video",
        title: "Bruna Foss — Pela Luz dos Olhos Teus (Cover)",
        category: "CONTEÚDO EXTRA",
        year: "2023",
        date: "2023-06-01",
        youtubeId: "2aIpZU4Q974",
        image: "https://img.youtube.com/vi/2aIpZU4Q974/maxresdefault.jpg",
        url: "https://youtu.be/2aIpZU4Q974"
    }
];


/* ---------------------------------------------------------
   EXTRA — RENDER
--------------------------------------------------------- */

const extraFeatured = document.getElementById("extraFeatured");
const extraGrid = document.getElementById("extraGrid");

if (extraFeatured && extraGrid) {

    /*
     * Organiza os conteúdos do mais recente
     * para o mais antigo.
     */
    const sortedExtras = [...extras].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const featured = sortedExtras[0];
    const archive = sortedExtras.slice(1);


    /* -----------------------------------------------------
       FEATURED
    ----------------------------------------------------- */

    if (featured.type === "video") {

        extraFeatured.innerHTML = `
            <div class="extra-featured-card">

                <div class="extra-featured-media">

                    <img
                        class="extra-featured-thumbnail"
                        src="${featured.image}"
                        alt="${featured.title}"
                    >

                    <iframe
                        class="extra-featured-iframe"
                        src=""
                        data-youtube-id="${featured.youtubeId}"
                        title="${featured.title}"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowfullscreen>
                    </iframe>

                </div>

                <div class="extra-featured-info">

                    <span>${featured.category}</span>

                    <h3>${featured.title}</h3>

                    <p>YouTube • ${featured.year}</p>

                    <a
                        class="extra-featured-link"
                        href="${featured.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Assistir no YouTube  <span class="mobile-hide-arrow">↗</span>
                    </a>

                </div>

            </div>
        `;

    } else {

        extraFeatured.innerHTML = `
            <div class="extra-featured-card">

                <div class="extra-featured-article">

                    <div class="extra-featured-article-image">

                        <img
                            src="${featured.image}"
                            alt="${featured.title}"
                        >

                    </div>

                    <div class="extra-featured-info">

                        <span>${featured.category}</span>

                        <h3>${featured.title}</h3>

                        <p>${featured.year}</p>

                        <a
                            class="extra-featured-link"
                            href="${featured.url}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ler matéria <span class="mobile-hide-arrow">↗</span>
                        </a>

                    </div>

                </div>

            </div>
        `;
    }


    /* -----------------------------------------------------
       ARCHIVE
    ----------------------------------------------------- */

    archive.forEach(item => {

        const card = document.createElement("a");

        card.className = "extra-video";

        card.href = item.url;

        card.target = "_blank";

        card.rel = "noopener noreferrer";

        const playButton =
            item.type === "video"
                ? `<span class="play-button">▶</span>`
                : `<span class="play-button">↗</span>`;

        card.innerHTML = `

            <div class="extra-video-image">

                <img
                    src="${item.image}"
                    alt="${item.title}"
                >

                ${playButton}

            </div>

            <div class="extra-video-info">

                <span>${item.category}</span>

                <h3>${item.title}</h3>

                <p>
                    ${item.type === "video" ? "YouTube" : "Banda B"}
                    • ${item.year}<span class="mobile-hide-arrow">↗</span>
                </p>

            </div>
        `;

        extraGrid.appendChild(card);
    });


    /* -----------------------------------------------------
       AUTOPLAY
    ----------------------------------------------------- */

    const featuredIframe =
        document.querySelector(".extra-featured-iframe");

    const featuredThumbnail =
        document.querySelector(".extra-featured-thumbnail");


    if (featuredIframe && featuredThumbnail) {

        let videoLoaded = false;

        const loadFeaturedVideo = () => {

            if (videoLoaded) return;

            const youtubeId =
                featuredIframe.dataset.youtubeId;

            featuredIframe.src =
                `https://www.youtube.com/embed/${youtubeId}` +
                `?autoplay=1` +
                `&mute=1` +
                `&playsinline=1` +
                `&controls=1` +
                `&rel=0` +
                `&modestbranding=1`;

            videoLoaded = true;

            /*
             * Esconde a thumbnail depois que o iframe
             * começa a carregar.
             */
            setTimeout(() => {
                featuredThumbnail.style.opacity = "0";
                featuredThumbnail.style.pointerEvents = "none";
            }, 800);
        };


        const pauseFeaturedVideo = () => {

            if (!videoLoaded) return;

            /*
             * Recarregar o iframe sem autoplay
             * força o vídeo a parar.
             */
            const youtubeId =
                featuredIframe.dataset.youtubeId;

            featuredIframe.src =
                `https://www.youtube.com/embed/${youtubeId}` +
                `?mute=1` +
                `&playsinline=1` +
                `&controls=1` +
                `&rel=0` +
                `&modestbranding=1`;
        };


        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            loadFeaturedVideo();

                        } else {

                            pauseFeaturedVideo();

                        }

                    });

                },
                {
                    threshold: 0.35
                }
            );


        observer.observe(extraFeatured);
    }
}

/* ---------------------------------------------------------
   HOME PAGE — TRACK LIST
--------------------------------------------------------- */

const trackList = document.getElementById("trackList");

if (trackList) {
    tracks.forEach((track, index) => {
        const row = document.createElement("a");

        row.className = "track";
        row.href = `/song.html?track=${track.id}`;

        row.innerHTML = `
            <span class="track-number">${String(index + 1).padStart(2, "0")}</span>
            <span class="track-name">${track.title}</span>
            <span class="track-type">${track.type}</span>
            <span class="track-duration">${track.duration}</span>
            <span class="track-arrow">↗</span>
        `;

        trackList.appendChild(row);
    });
}


/* ---------------------------------------------------------
   YOUTUBE
--------------------------------------------------------- */

function getYoutubeEmbedUrl(url) {
    if (!url) return null;

    const match = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/
    );

    return match
        ? `https://www.youtube.com/embed/${match[1]}`
        : null;
}


/* ---------------------------------------------------------
   SONG PAGE
--------------------------------------------------------- */

const songTitle = document.getElementById("songTitle");

if (songTitle) {

    const params = new URLSearchParams(window.location.search);
    const trackId = params.get("track");

    const track = tracks.find(item => item.id === trackId);

    if (!track) {

        songTitle.textContent = "Song not found";

    } else {

        document.title = `${track.title} — Bruna Foss`;

        /* SEO — DESCRIPTION */

        let metaDescription =
            document.querySelector('meta[name="description"]');

        if (!metaDescription) {

            metaDescription =
                document.createElement("meta");

            metaDescription.name = "description";

            document.head.appendChild(metaDescription);
        }

        metaDescription.content =
            `${track.title}, música de Bruna Foss. Conheça a letra, o significado e assista ao vídeo da canção.`;

        document.getElementById("songTitle").textContent = track.title;
        document.getElementById("songCategory").textContent = track.type;

        /* VIDEO */

        /* VIDEO */

        const youtubeVideo = document.getElementById("youtubeVideo");
        const videoSection = document.querySelector(".video-section");

        if (youtubeVideo && videoSection) {

            if (track.youtube) {

                const embedUrl = getYoutubeEmbedUrl(track.youtube);

                if (embedUrl) {
                    youtubeVideo.src = embedUrl;
                } else {
                    videoSection.remove();
                }

            } else {
                videoSection.remove();
            }
        }

        /* LYRICS */

        const lyrics = document.getElementById("lyrics");
        const meaning = document.getElementById("meaning");

        if (track.lyrics) {
            lyrics.innerHTML = track.lyrics;
        }

        if (track.meaning) {
            meaning.innerHTML = `<p>${track.meaning}</p>`;
        }

        /* EXTERNAL LINKS */

        setupExternalLink(
            document.getElementById("spotifyButton"),
            track.spotify,
            "Spotify ↗"
        );

        setupExternalLink(
            document.getElementById("youtubeButton"),
            track.youtube,
            "YouTube ↗"
        );

        /* IMAGE */

        if (track.image) {

            const songImage = document.getElementById("songImage");

            songImage.style.backgroundImage =
                `url('${track.image}')`;

            songImage.classList.remove("image-placeholder");
            songImage.innerHTML = "";
        }
    }
}

/* ---------------------------------------------------------
   EXTERNAL LINKS
--------------------------------------------------------- */

function setupExternalLink(element, url, label) {

    if (!url) {
        element.classList.add("disabled-link");
        element.removeAttribute("href");
        element.textContent = `${label} — soon`;
        return;
    }

    element.href = url;
    element.textContent = label;
    element.classList.remove("disabled-link");
}


/* ---------------------------------------------------------
   MOBILE MENU
--------------------------------------------------------- */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
        menuButton.classList.toggle("open");
    });

    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            menuButton.classList.remove("open");
        });
    });
}


/* ---------------------------------------------------------
   SMOOTH SCROLL
--------------------------------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
/* =========================================================
   PHOTOBOOK — LIGHTBOX
========================================================= */

const photoButtons = document.querySelectorAll(".photobook .photo");

if (photoButtons.length) {

    const lightbox = document.createElement("div");

    lightbox.className = "photo-lightbox";

    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Fechar">
            ×
        </button>

        <img src="" alt="">

        <span class="lightbox-counter"></span>
    `;

    document.body.appendChild(lightbox);


    const lightboxImage =
        lightbox.querySelector("img");

    const lightboxClose =
        lightbox.querySelector(".lightbox-close");

    const lightboxCounter =
        lightbox.querySelector(".lightbox-counter");
    const lightboxPrev = document.createElement("button");
    const lightboxNext = document.createElement("button");

    lightboxPrev.className = "lightbox-nav lightbox-prev";
    lightboxNext.className = "lightbox-nav lightbox-next";

    lightboxPrev.innerHTML = "←";
    lightboxNext.innerHTML = "→";

    lightboxPrev.setAttribute("aria-label", "Foto anterior");
    lightboxNext.setAttribute("aria-label", "Próxima foto");

    lightbox.appendChild(lightboxPrev);
    lightbox.appendChild(lightboxNext);
    let currentPhotoIndex = 0;

    function showPhoto(index) {

        if (index < 0) {
            index = photoButtons.length - 1;
        }

        if (index >= photoButtons.length) {
            index = 0;
        }

        currentPhotoIndex = index;

        const button = photoButtons[currentPhotoIndex];

        const image = button.dataset.photo;

        lightboxImage.src = image;

        lightboxImage.alt =
            button.querySelector("img").alt;

        lightboxCounter.textContent =
            `${String(currentPhotoIndex + 1).padStart(2, "0")} / ${String(photoButtons.length).padStart(2, "0")}`;
    }
    photoButtons.forEach((button, index) => {

        button.addEventListener("click", () => {

            showPhoto(index);

            lightbox.classList.add("open");

            document.body.style.overflow = "hidden";
        });

    });
    lightboxPrev.addEventListener("click", (event) => {

        event.stopPropagation();

        showPhoto(currentPhotoIndex - 1);

    });


    lightboxNext.addEventListener("click", (event) => {

        event.stopPropagation();

        showPhoto(currentPhotoIndex + 1);

    });

    function closeLightbox() {

        lightbox.classList.remove("open");

        document.body.style.overflow = "";

        setTimeout(() => {
            lightboxImage.src = "";
        }, 300);
    }


    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );


    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });


    document.addEventListener("keydown", (event) => {

        if (!lightbox.classList.contains("open")) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowLeft") {
            showPhoto(currentPhotoIndex - 1);
        }

        if (event.key === "ArrowRight") {
            showPhoto(currentPhotoIndex + 1);
        }

    });

}
