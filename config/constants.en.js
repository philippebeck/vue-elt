"use strict";
/* eslint-disable */

export default {
  /******************** CONFIG ********************/

  API_URL : "http://localhost:3000",

  CAT_ARTICLE : "Technology",
  CAT_LINK : "Technology",
  CAT_PRODUCT : "Technology",

  PRICE_MAX : 5000,
  PRICE_MIN : 1,

  RECAPTCHA_KEY : "{your-recaptcha-key}",

  REGEX_EMAIL : /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/,
  REGEX_PASS : /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/,
  REGEX_URL : /((https?|ftp|ssh|mailto):\/\/)?[a-z0-9\/:%_+.,#?!@&=-]+$/,

  STRING_MAX : 50,
  STRING_MIN : 2,

  TEXT_MAX : 5000,
  TEXT_MIN : 8,

  TINY_KEY : "{your-tinymce-key}",

  URL_MAX : 100,
  URL_MIN : 5,

  USER_ID : JSON.parse(localStorage.getItem("userId")),

  /******************** CATEGORIES ********************/

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
    "Fashion",
    "Health",
    "Sport",
    "Technology"
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

  ARTICLE_CREATOR : "Create article",
  GALLERY_CREATOR : "Create gallery",
  IMAGE_CREATOR : "Create image",
  LINK_CREATOR : "Create link",
  PRODUCT_CREATOR : "Create product",
  ARTICLE_MANAGER : "Article manager",
  GALLERY_MANAGER : "Gallery manager",
  IMAGE_MANAGER : "Image Manager",
  LINK_MANAGER : "Link manager",
  ORDER_MANAGER : "Order manager",
  PRODUCT_MANAGER : "Product manager",
  USER_MANAGER : "User manager",

  /******************** INFO ********************/

  INFO_ALT : "Alternative text",
  INFO_CATEGORY : "Choose a category",
  INFO_EMAIL : "john@doe.com",
  INFO_IMAGE : "Image file only",
  INFO_NAME : "My new name",
  INFO_OPTIONS : "option-1,option-2,option-3,etc",
  INFO_PASSWORD : "********",
  INFO_PRICE : "100 €",
  INFO_URL : "https://",
  INFO_UP_ALT : "Update the alternative text",
  INFO_UP_CATEGORY : "Update the category",
  INFO_UP_DESCRIPTION : "Update the description",
  INFO_UP_EMAIL : "Update the email",
  INFO_UP_IMAGE : "Update the image",
  INFO_UP_NAME : "Update the name",
  INFO_UP_OPTIONS : "Update the options",
  INFO_UP_PRICE : "Update the price",
  INFO_UP_ORDER : "Update status of order #",
  INFO_UP_ROLE : "Update the role",
  INFO_UP_STATUS : "Update the status",
  INFO_UP_URL : "Update the URL",

  /******************** LEGEND ********************/

  LEGEND_ALT : "Alt",
  LEGEND_AUTHOR : "Author",
  LEGEND_CATEGORY : "Category",
  LEGEND_DESCRIPTION : "Description",
  LEGEND_EMAIL : "Email",
  LEGEND_IMAGE : "Image",
  LEGEND_NAME : "Name",
  LEGEND_OPTIONS : "Options",
  LEGEND_PASSWORD : "Password",
  LEGEND_PRICE : "Price",
  LEGEND_TEXT : "Text",
  LEGEND_URL : "Url",

  /******************** LABEL ********************/
  
  LABEL_ALT : "Write the alternative text",
  LABEL_AUTHOR : "Provide the author name",
  LABEL_CATEGORY : "Choose the most appropriate category",
  LABEL_DESCRIPTION : "Write the description",
  LABEL_EMAIL : "Write your email",
  LABEL_IMAGE : "Provide an image",
  LABEL_NAME : "Write a name",
  LABEL_OPTIONS : "Write the options",
  LABEL_PASSWORD : "8 to 50 characters with upper & lower, 1 number mini & no space",
  LABEL_PRICE : "Write the price",
  LABEL_URL : "Write the URL",

  /******************** CONTENT ********************/

  CONTENT_CREATE : "Create ",
  CONTENT_ENTER : "Enter ",
  CONTENT_SEND : "Send ",
  CONTENT_SIGNUP : "Signup",

  /******************** TITLE ********************/

  TITLE_DELETE : "Delete ",
  TITLE_DELETE_IMAGE : "Delete image #",
  TITLE_DELETE_ORDER : "Delete order #",
  TITLE_FORGOT : "Send a new password",
  TITLE_GO : "Go to ",
  TITLE_SIGNIN : "SignIn to your account",
  TITLE_SIGNUP : "SignUp a new user",
  TITLE_UPDATE : "Update ",

  /******************** ALERT ********************/

  ALERT_CREATED : " created !",
  ALERT_DELETED : " deleted !",
  ALERT_IMAGE : "Image #",
  ALERT_IMG : "An image must be uploaded !",
  ALERT_ORDER : "Order #",
  ALERT_SENDED : " sended !",
  ALERT_UPDATED : " updated !",
  
  /******************** CHECK ********************/
  
  CHECK_EMAIL : "Your Email is not a valid address.",
  CHECK_NUMBER : "The number must be between ",
  CHECK_PASS : "Your Password must have 8 to 50 characters, with uppercase, lowercase, 1 number minimum & no space.",
  CHECK_STRING : "The number of characters must be between ",
  CHECK_URL : "This URL is not a valid path.",

  /******************** OTHER ********************/

  CONFIRM_FORGOT : `, do you confirm sending a new password ?`,
  HEAD_UP : "up/del",
  FORGOT_SUBJECT : "New password",
  FORGOT_TEXT : "This is your new password, keep it safe : ",
}
