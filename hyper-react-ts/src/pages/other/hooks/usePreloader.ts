import { useEffect } from 'react';

export default function usePreloader() {
    useEffect(() => {
        var opacity = 0;

        const fade = () => {
            let body = document.getElementById('preloader');
            opacity = Number(window.getComputedStyle(body!).getPropertyValue('opacity'));
            if (body && opacity > 0) {
                opacity = opacity - 0.2;
                body.style.opacity = String(opacity);
            } else {
                clearInterval(intervalId);
                if (body) body.style.display = 'none';
            }
        };
        let intervalId = setInterval(fade, 200);

        return () => clearInterval(intervalId);
    }, []);
}
