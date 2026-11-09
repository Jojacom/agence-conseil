// Coordonnées centralisées : à modifier ici uniquement.
export const site = {
    name: "JOJACOM",
    legalName: "JOJACOM SARL",
    url: "https://jojacom.online",
    email: "contact@jojacom.online",
    phoneDisplay: "+221 75 447 29 75",
    phoneHref: "+221754472975",
    whatsapp: "221754472975",
    address: "SIPRES 2, Villa N° 168",
    city: "Dakar",
    country: "SN",
    rccm: "SN.DKR.2023.B.48056",
    ninea: "010762575",
    social: {
        facebook: "https://www.facebook.com/jojacom",
        instagram: "https://www.instagram.com/jojacom_dig",
        linkedin: "https://www.linkedin.com/in/jojacom-senegal-06a5ab2b1",
    },
};

export const whatsappLink = (message = "Bonjour JOJACOM, je souhaite en savoir plus sur vos services.") =>
    `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
