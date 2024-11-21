<template>
    <button type="button" @click="CookieConsent.showPreferences()" class="flex gap-1 items-center text-xs uppercase hover:text-[--secondary]">
        <Settings class=" text-lg"/>Ajustes privacidad
    </button>
</template>
  
<script setup>
import * as CookieConsent from 'vanilla-cookieconsent';
import "vanilla-cookieconsent/dist/cookieconsent.css";
import Settings from '@/components/icons/Settings.vue'
if (process.client) {
    CookieConsent.run({
    onConsent: function(){
        if(CookieConsent.acceptedCategory('analytics')){
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MNLGTQ73EL');
        }
    },
    onChange: function(){
        if(CookieConsent.acceptedCategory('analytics')){
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MNLGTQ73EL');
        }
    },
        guiOptions: {
            consentModal: {
                layout: "cloud inline",
                position: "bottom center",
                equalWeightButtons: true,
                flipButtons: false
            },
            preferencesModal: {
                layout: "box",
                position: "right",
                equalWeightButtons: false,
                flipButtons: true
            }
        },
        categories: {
            necessary: {
                readOnly: true
            },
            analytics: {
            
            }
        },
        language: {
            default: "es",
            autoDetect: "browser",
            translations: {
                es: {
                    consentModal: {
                        title: "Uso de Cookies en Este Sitio Web",
                        description: "Este sitio web utiliza cookies para mejorar la experiencia del usuario y analizar cómo se utiliza el sitio. Al continuar utilizando este sitio web, acepta nuestro uso de cookies según nuestra política de cookies.",
                        acceptAllBtn: "Aceptar todo",
                        acceptNecessaryBtn: "Rechazar todo",
                        showPreferencesBtn: "Gestionar preferencias",
                    },
                    preferencesModal: {
                        title: "Preferencias de Consentimiento",
                        acceptAllBtn: "Aceptar todo",
                        acceptNecessaryBtn: "Rechazar todo",
                        savePreferencesBtn: "Guardar preferencias",
                        closeIconLabel: "Cerrar modal",
                        serviceCounterLabel: "Servicios",
                        sections: [
                            {
                                title: "Uso de Cookies",
                                description: "Este sitio web utiliza cookies para mejorar su experiencia de navegación. Las cookies necesarias para el funcionamiento básico del sitio se almacenan en su navegador. También empleamos cookies de terceros para analizar cómo utiliza este sitio web, las cuales se guardarán solo con su consentimiento. Puede optar por desactivar estas cookies, si lo desea, aunque esto podría afectar su experiencia de usuario.<br><br>Al utilizar este sitio web, usted acepta nuestro uso de cookies de acuerdo con nuestra política, la cual se actualiza periódicamente. Le recomendamos revisarla de vez en cuando para estar al tanto de cómo y por qué utilizamos cookies en este sitio web."
                            },
                            {
                                title: "Cookies Estrictamente Necesarias <span class=\"pm__badge\">Siempre Habilitado</span>",
                                description: "Estas cookies son esenciales para que el sitio web funcione correctamente. No recopilan ninguna información personal identificable y generalmente se utilizan para recordar las preferencias del usuario, como el idioma seleccionado o el inicio de sesión automático.",
                                linkedCategory: "necessary"
                            },
                            {
                                title: "Cookies Analíticas",
                                description: "Estas cookies recopilan información sobre cómo los visitantes utilizan un sitio web, por ejemplo, qué páginas visitan con más frecuencia y si reciben mensajes de error. Esta información se utiliza para mejorar la experiencia del usuario y optimizar el rendimiento del sitio.",
                                linkedCategory: "analytics"
                            },
                        ]
                    }
                }
            }
        },
        disablePageInteraction: true
    });
}
</script>
