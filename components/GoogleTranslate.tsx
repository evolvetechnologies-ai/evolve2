import React, { useEffect, useRef } from 'react';

declare global {
    interface Window {
        googleTranslateElementInit?: () => void;
        google?: any;
    }
}

const GoogleTranslate: React.FC = () => {
    const scriptAdded = useRef(false);

    useEffect(() => {
        const addGoogleTranslateScript = () => {
            if (scriptAdded.current) return;

            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);

            scriptAdded.current = true;
        };

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                { pageLanguage: 'en' },
                'google_translate_element'
            );
        };

        addGoogleTranslateScript();

        return () => {
            // Clean up the script element when component unmounts
            const elements = document.querySelectorAll('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]');
            elements.forEach(element => element.remove());
        };
    }, []);

    return (
        <>
            <div id="google_translate_element" style={{ zIndex: 1000, position: 'absolute', top: 60, right: 80 }}></div>
        </>
    );
};

export default GoogleTranslate;