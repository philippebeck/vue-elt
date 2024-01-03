"use strict";

/* eslint-disable */

export default {

  // ! ********** ALERT **********

  ALERT_CREATED : " created !",
  ALERT_DELETED : " deleted !",
  ALERT_IMAGE : "Image #",
  ALERT_IMG : "An image must be uploaded !",
  ALERT_ORDER : "Order #",
  ALERT_UPDATED : " updated !",
  
  // ! ********** CATEGORY **********

  CATS_ARTICLE : [
    "Culture",
    "Fashion",
    "Health",
    "Science",
    "Sport",
    "Technology", 
    "Travel"
  ],

  CATS_LINK : [
    "Culture",
    "Fashion",
    "Health",
    "Science",
    "Sport",
    "Technology", 
    "Travel"
  ],

  CATS_ORDER : [
    "Pending",
    "Paid",
    "Done",
    "Canceled"
  ],

  CATS_PRODUCT : [
    "Culture",
    "Fashion",
    "Health",
    "Science",
    "Sport",
    "Technology",
    "Travel"
  ],

  // ! ********** CHECK **********
  
  CHECK_EMAIL : "Your Email is not a valid address.",
  CHECK_PASS : "Your Password must have 8 to 50 characters, with uppercase, lowercase, 1 number minimum & no space.",
  CHECK_STRING : "The number of characters must be between ",
  CHECK_URL : "This URL is not a valid path.",

  // ! ********** CONFIG **********

  API_URL : "http://localhost:3000",

  CAT_ARTICLE : "Technology",
  CAT_LINK : "Technology",
  CAT_PRODUCT : "Technology",

  PRICE_MAX : 5000,
  PRICE_MIN : 1,

  REGEX_EMAIL : /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/,
  REGEX_URL : /((https?|ftp|ssh|mailto):\/\/)?[a-z0-9\/:%_+.,#?!@&=-]+$/,

  TEXT_MAX : 5000,
  TEXT_MIN : 8,

  TINY_INIT : { 
    plugins: 'code image link media emoticons visualblocks preview searchreplace',
    menubar: 'format edit insert view',
    toolbar:
    'bold italic underline strikethrough code forecolor backcolor | \
    undo redo cut copy paste | \
    image link media emoticons | \
    visualblocks preview searchreplace | \
    blocks fontfamily fontsize styles'
  },
  TINY_KEY : "{your-tinymce-key}",

  URL_MAX : 100,
  URL_MIN : 5,

  // ! ********** FORM **********

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

  // ! ********** HEADER **********

  ARTICLE_MANAGER : "Article manager",
  GALLERY_MANAGER : "Gallery manager",
  IMAGE_MANAGER : "Image Manager",
  LINK_MANAGER : "Link manager",
  ORDER_MANAGER : "Order manager",
  PRODUCT_MANAGER : "Product manager",
  USER_MANAGER : "User manager",

  // ! ********** INFO **********

  INFO_ALT : "Alternative text",
  INFO_AUTHOR : "Write the author's name",
  INFO_CAT : "Choose a category",
  INFO_DESCRIPTION: "Write a description",
  INFO_IMAGE : "Image file only",
  INFO_NAME : "My new name",
  INFO_OPTIONS : "option-1,option-2,option-3,etc",
  INFO_PRICE : "100 €",
  INFO_URL : "https://",
  INFO_UP_CAT : "Update the category",
  INFO_UP_DESCRIPTION : "Update the description",
  INFO_UP_EMAIL : "Update the email",
  INFO_UP_GALLERY : "Update the gallery",
  INFO_UP_IMAGE : "Update the image",
  INFO_UP_NAME : "Update the name",
  INFO_UP_ROLE : "Update the role",
  INFO_UP_STATUS : "Update the status",
  INFO_UP_URL : "Update the URL",

  // ! ********** LABEL **********
  
  LABEL_ALT : "Indicate the alternative text",
  LABEL_AUTHOR : "Indicate the author name",
  LABEL_CAT : "Indicate the category",
  LABEL_DESCRIPTION : "Indicate the description",
  LABEL_EMAIL : "Indicate the email",
  LABEL_IMAGE : "Indicate the image",
  LABEL_NAME : "Indicate the name",
  LABEL_OPTIONS : "Indicate the options",
  LABEL_PRICE : "Indicate the price",
  LABEL_ROLE : "Indicate the role",
  LABEL_URL : "Indicate the URL",

  // ! ********** LEGEND **********

  LEGEND_ALT : "Alt",
  LEGEND_AUTHOR : "Author",
  LEGEND_CAT : "Category",
  LEGEND_DESCRIPTION : "Description",
  LEGEND_EMAIL : "Email",
  LEGEND_IMAGE : "Image",
  LEGEND_NAME : "Name",
  LEGEND_OPTIONS : "Options",
  LEGEND_PRICE : "Price",
  LEGEND_ROLE : "Role",
  LEGEND_TEXT : "Text",
  LEGEND_URL : "Url",

  // ! ********** LIST **********

  ROLES_USER : [
    "admin",
    "editor",
    "user"
  ],

  // ! ********** OTHER **********

  CONTENT_CREATE : "Create ",
  HEAD_UP : "up/del",

  // ! ********** TITLE **********

  TITLE_ARTICLE : "Create article",
  TITLE_DELETE : "Delete ",
  TITLE_DELETE_IMAGE : "Delete image #",
  TITLE_DELETE_ORDER : "Delete order #",
  TITLE_GALLERY : "Create gallery",
  TITLE_GO : "Go to ",
  TITLE_IMAGE : "Create image",
  TITLE_LINK : "Create link",
  TITLE_PRODUCT : "Create product",
  TITLE_UPDATE : "Update ",
  TITLE_UPDATE_ORDER : "Update status of order #"
}
