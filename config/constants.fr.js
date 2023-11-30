"use strict";
/* eslint-disable */

export default {
  /******************** CONFIG ********************/

  API_URL : "http://localhost:3000",

  CAT_ARTICLE : "Technologie",
  CAT_LINK : "Technologie",
  CAT_PRODUCT : "Technologie",

  PRICE_MAX : 5000,
  PRICE_MIN : 1,

  RECAPTCHA_KEY : "{votre-cle-recaptcha}",

  REGEX_EMAIL : /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/,
  REGEX_PASS : /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/,
  REGEX_URL : /((https?|ftp|ssh|mailto):\/\/)?[a-z0-9\/:%_+.,#?!@&=-]+$/,

  STRING_MAX : 50,
  STRING_MIN : 2,

  TEXT_MAX : 5000,
  TEXT_MIN : 8,

  TINY_KEY : "{votre-cle-tinymce}",

  URL_MAX : 100,
  URL_MIN : 5,

  USER_ID : JSON.parse(localStorage.getItem("userId")),

  /******************** CATEGORIES ********************/

  CATS_ARTICLE : [
    "Culture",
    "Mode",
    "Santé",
    "Science",
    "Sport",
    "Technologie", 
    "Voyage"
  ],

  CATS_LINK : [
    "Culture",
    "Mode",
    "Santé",
    "Science",
    "Sport",
    "Technologie", 
    "Voyage"
  ],

  CATS_ORDER : [
    "En attente",
    "Payée",
    "Faite",
    "Annulée"
  ],

  CATS_PRODUCT : [
    "Mode",
    "Santé",
    "Sport",
    "Technologie"
  ],

  /******************** FORMS ********************/

  ARTICLE_FORM : [
    "name", 
    "text", 
    "image", 
    "alt", 
    "cat"
  ],

  GALLERY_FORM : [
    "name",
    "author"
  ],

  IMAGE_FORM : [
    "image",
    "description"
  ],

  LINK_FORM : [
    "name", 
    "url", 
    "cat"
  ],

  PRODUCT_FORM : [
    "name", 
    "description", 
    "image", 
    "alt", 
    "price", 
    "options", 
    "cat"
  ],

  /******************** LIST ********************/

  ROLES_USER : [
    "admin",
    "editor",
    "user"
  ],

  /******************** TITLES ********************/

  ARTICLE_CREATOR : "Créer un article",
  GALLERY_CREATOR : "Créer une galerie",
  IMAGE_CREATOR : "Créer une image",
  LINK_CREATOR : "Créer un lien",
  PRODUCT_CREATOR : "Créer un service",
  ARTICLE_MANAGER : "Gestionnaire d'articles",
  GALLERY_MANAGER : "Gestionnaire de galeries",
  IMAGE_MANAGER : "Gestionnaire d'images",
  LINK_MANAGER : "Gestionnaire de liens",
  ORDER_MANAGER : "Gestionnaire de commandes",
  PRODUCT_MANAGER : "Gestionnaire de services",
  USER_MANAGER : "Gestionnaire d'utilisateurs",

  /******************** INFO ********************/

  INFO_ALT : "Texte alternatif",
  INFO_CATEGORY : "Choisissez une catégorie",
  INFO_EMAIL : "john@doe.com",
  INFO_IMAGE : "Fichier image uniquement",
  INFO_NAME : "Mon nouveau nom",
  INFO_OPTIONS : "option-1,option-2,option-3,etc",
  INFO_PASSWORD : "********",
  INFO_PRICE : "100 €",
  INFO_URL : "https://",
  INFO_UP_ALT : "Mettre à jour le texte alternatif",
  INFO_UP_CATEGORY : "Mettre à jour la catégorie",
  INFO_UP_DESCRIPTION : "Mettre à jour la description",
  INFO_UP_EMAIL : "Mettre à jour l'email",
  INFO_UP_IMAGE : "Mettre à jour l'image",
  INFO_UP_NAME : "Mettre à jour le nom",
  INFO_UP_OPTIONS : "Mettre à jour les options",
  INFO_UP_PRICE : "Mettre à jour le prix",
  INFO_UP_ORDER : "Mettre à jour le statut de la commande #",
  INFO_UP_ROLE : "Mettre à jour le role",
  INFO_UP_STATUS : "Mettre à jour le statut",
  INFO_UP_URL : "Mettre à jour l'URL",

  /******************** LEGEND ********************/

  LEGEND_ALT : "Alt",
  LEGEND_AUTHOR : "Auteur",
  LEGEND_CATEGORY : "Catégorie",
  LEGEND_DESCRIPTION : "Description",
  LEGEND_EMAIL : "Email",
  LEGEND_IMAGE : "Image",
  LEGEND_NAME : "Nom",
  LEGEND_OPTIONS : "Options",
  LEGEND_PASSWORD : "Mot de passe",
  LEGEND_PRICE : "Prix",
  LEGEND_TEXT : "Texte",
  LEGEND_URL : "Url",

  /******************** LABEL ********************/
  
  LABEL_ALT : "Ecrivez le texte alternatif",
  LABEL_AUTHOR : "Indiquer le nom de l'auteur",
  LABEL_CATEGORY : "Choisissez la catégorie la plus appropriée",
  LABEL_DESCRIPTION : "Ecrivez la description",
  LABEL_EMAIL : "Ecrivez votre email",
  LABEL_IMAGE : "Fournissez une image",
  LABEL_NAME : "Ecrivez un nom",
  LABEL_OPTIONS : "Ecrivez les options",
  LABEL_PASSWORD : "8 à 50 caractères avec majuscule & minuscule, 1 nombre mini & pas d'espace",
  LABEL_PRICE : "Ecrivez le prix",
  LABEL_URL : "Ecrivez l'URL",

  /******************** CONTENT ********************/

  CONTENT_CREATE : "Créer ",
  CONTENT_ENTER : "Entrer ",
  CONTENT_SEND : "Envoyer ",
  CONTENT_SIGNUP : "S'inscrire",

  /******************** TITLE ********************/

  TITLE_DELETE : "Supprimer ",
  TITLE_DELETE_IMAGE : "Supprimer l'image #",
  TITLE_DELETE_ORDER : "Supprimer la commande #",
  TITLE_FORGOT : "Envoyer un nouveau mot de passe",
  TITLE_GO : "Aller à ",
  TITLE_SIGNIN : "Se connecter à son compte",
  TITLE_SIGNUP : "S'inscrire comme nouvel utilisateur",
  TITLE_UPDATE : "Mettre à jour ",

  /******************** ALERT ********************/

  ALERT_CREATED : " créé !",
  ALERT_DELETED : " supprimé !",
  ALERT_IMAGE : "Image #",
  ALERT_IMG : "Une image doit être téléchargée !",
  ALERT_ORDER : "Commande #",
  ALERT_SENDED : " envoyé !",
  ALERT_UPDATED : " mis à jour !",
  
  /******************** CHECK ********************/
  
  CHECK_EMAIL : "Votre email n'est pas une adresse valide.",
  CHECK_NUMBER : "Le nombre doit être compris entre ",
  CHECK_PASS : "Votre mot de passe doit comporter entre 8 et 50 caractères, avec des majuscules, des minuscules, 1 chiffre minimum et aucun espace.",
  CHECK_STRING : "Le nombre de caractères doit être compris entre ",
  CHECK_URL : "Cette URL n'est pas un chemin valide.",

  /******************** OTHER ********************/

  CONFIRM_FORGOT : `Confirmez-vous l'envoi d'un nouveau mot de passe ?`,
  HEAD_UP : "up/del",
  FORGOT_SUBJECT : "Nouveau mot de passe",
  FORGOT_TEXT : "Ceci est votre nouveau mot de passe, gardez-le en sécurité : "
}
