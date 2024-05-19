document.addEventListener('DOMContentLoaded', function() {
    let dbClicked = false;
    let bbClicked = false;
    let originalDbSrc = [];

    const bbImage = document.querySelector('.bb');
    const dbImages = document.querySelectorAll('.db');
    const smileImage = document.querySelector('.smile');
    const body = document.body;

    dbImages.forEach(function(image) {
        originalDbSrc.push(image.src);
    });

    function playMusic() {
        const audio = document.getElementById('audio');
        audio.currentTime = 0;
        audio.play();
    }

    if (bbImage) {
        bbImage.addEventListener('click', function() {
            if (!dbClicked) {
                bbClicked = true;
                bbImage.src = 'Media/8.png';
                if (smileImage) {
                    smileImage.style.pointerEvents = 'none';
                }
                playMusic();
                body.classList.add('background-image');
            }
        });
    }

    dbImages.forEach(function(image) {
        image.addEventListener('click', function() {
            if (!dbClicked && !bbClicked) {
                dbClicked = true;
                image.src = 'Media/ded.png';
                if (bbImage) {
                    bbImage.style.pointerEvents = 'none';
                }
            }
        });
    });

    if (smileImage) {
        smileImage.addEventListener('click', function() {
            dbClicked = false;
            bbClicked = false;
            dbImages.forEach(function(image, index) {
                image.src = originalDbSrc[index];
            });
            if (bbImage) {
                bbImage.style.pointerEvents = 'auto';
            }
            if (smileImage) {
                smileImage.style.pointerEvents = 'auto';
            }
            body.classList.remove('background-image');
        });
    }
});
