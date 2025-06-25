  let index = 0;
        const track = document.getElementById('carouselTrack');
        const items = document.querySelectorAll('.carousel-item-custom');

        function getItemWidth() {
            const style = getComputedStyle(track);
            const gap = parseInt(style.gap) || 0;
            return items[0].offsetWidth + gap;
        }

        function moveSlide(direction) {
            const itemWidth = getItemWidth();
            const containerWidth = track.parentElement.offsetWidth;
            const visibleItems = Math.floor(containerWidth / itemWidth);
            const maxIndex = items.length - visibleItems;

            index += direction;
            if (index < 0) index = 0;
            if (index > maxIndex) index = maxIndex;

            const scrollAmount = index * itemWidth;
            track.style.transform = `translateX(-${scrollAmount}px)`;
        }

        window.addEventListener('resize', () => moveSlide(0));