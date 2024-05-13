import i18n from "i18next"
import { initReactI18next } from "react-i18next"


i18n.use(initReactI18next).init({
    lng:"en",
    fallbackLng:"en",
    interPolation:{
        escapeValue:false
    },
    resources:{
        en:{
            translation:{
                connexion:"Sign In",
                entrer:"Pay your bills to NFC Bank securely",
                errorAuth:"Fill in all fields",
                errorMail:"Incorrect email",
                errorPhone:"Incorrect phone number",
                errorPhonePay:"Incorrect phone number",
                firsText:"Pay your school bills without having to travel",
                secondText:"Simplify school life with our app!",
                thirdText:"No more endless queues and unnecessary travel. With our online school bill payment app, you can pay all your school bills with one click, no matter where you are and at any time. No more stress, no more delays, just peace of mind. Join us today and discover a new way to manage school fees. Because we believe that education deserves simplicity and efficiency",
                inscription:"registration",
                errorInscription:"Fill in all fields with a red star",
                pension:"School board",
                factures:"invoice",
                nom:"full name",
                ecole:"school",
                niveau:"level",
                parent :"Parent's Name",
                phone :"Telephone number",
                cni:"CNI number",
                paye :"Amount to be paid",
                matricule:"Service number",
                tracnhe:"slice",
                download:"Download",
                payePension:"Pay the pension",
                listFacture:"List of invoices",
                montant:"amount",
                deconnexion:"Disconnect"
            }
        },
        fr:{
            translation:{
                connexion:"Connexion",
                entrer:"Payer vos facture a la nfc banque en toute securite",
                errorAuth:"Remplir tous les champs",
                errorMail:"email incorrect",
                errorPhone:"numero incorrect",
                errorPhonePay:"numéro incorrect",
                firsText:"Payer vos factures scolaires sans vous deplacer",
                secondText:"Simplifiez la vie scolaire avec notre application!",
                thirdText:"Fini les files d’attente interminables et les déplacements inutiles. Avec notre application de paiement de facture scolaire en ligne, vous pouvez régler toutes vos factures scolaires en un clic, où que vous soyez et à tout moment. Plus de stress, plus de retard, juste la tranquillité d’esprit. Rejoignez-nous aujourd’hui et découvrez une nouvelle façon de gérer les frais scolaires. Parce que chez nous, nous croyons que l’éducation mérite simplicité et efficacité",
                inscription:"inscription",
                errorInscription:"remplir tous les champs ayant  une etoile rouge",
                pension:"pension scolaire",
                payePension:"payer la pension",
                factures:"facture",
                nom:"Nom Complet",
                ecole:"ecole",
                niveau:"niveau",
                parent :"Nom du parent",
                phone :"numéro de téléphone",
                cni:"numéro cni",
                paye :"motant à payer",
                matricule:"matricule",
                tracnhe:"tranche",
                download:"télécharger",
                listFacture:"Liste des factures",
                montant:"Montant",
                deconnexion:"Deconnexion"
            }
        }
    }
})

export default i18n