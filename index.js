const userFullName = document.querySelector('#user_fullname');
const userName = document.querySelector('#user_name');
const usertweet = document.querySelector('#user_tweet');
usertweet.value = "Impossible also says I am Possible"

const userTweetTime = document.querySelector('#tweet_time');
const userTweetDate = document.querySelector('#tweet_date');
const userTweetDevice = document.querySelector('#tweet_device');

const retweetCount = document.querySelector('#retweet_count');
const quoteCount = document.querySelector('#quote_count');
const likeCount = document.querySelector('#like_count');

const btnGenerate = document.querySelector('#btn_generate');



const previewUserFullName = document.querySelector('#preview_user_fullname');
const previewUserName = document.querySelector('#preview_user_name');
const previewUsertweet = document.querySelector('#preview_user_tweet');

const previewUserTweetTime = document.querySelector('#preview_tweet_time');
const previewUserTweetDate = document.querySelector('#preview_tweet_date');
const previewUserTweetDevice = document.querySelector('#preview_tweet_device');

const previewRetweetCount = document.querySelector('#preview_retweet_count');
const PreviewQuoteCount = document.querySelector('#preview_quote_count');
const previewLikeCount = document.querySelector('#preview_like_count');









const getTweetPreview = ({ tweet }) => {


  const { userFullNameValue,
    userNameValue,
    userTweetValue,
    userTweetTimeValue,
    userTweetDateValue,
    userTweetDeviceValue,
    retweetCountValue,
    quoteCountValue,
    likeCountValue } = tweet;

  previewUserFullName.innerHTML = userFullNameValue;
  previewUserName.innerHTML = userNameValue;
  previewUsertweet.innerHTML = userTweetValue;
  previewUserTweetTime.innerHTML = userTweetTimeValue;
  previewUserTweetDate.innerHTML = userTweetDateValue;
  previewUserTweetDevice.innerHTML = userTweetDeviceValue;
  previewRetweetCount.innerHTML = retweetCountValue;
  PreviewQuoteCount.innerHTML = quoteCountValue;
  previewLikeCount.innerHTML = likeCountValue;




}



const getTweetValues = () => {
  const userFullNameValue = userFullName.value;
  const userNameValue = userName.value;
  const userTweetValue = usertweet.value;

  const userTweetTimeValue = userTweetTime.value;
  const userTweetDateValue = userTweetDate.value;
  const userTweetDeviceValue = userTweetDevice.value;

  const retweetCountValue = retweetCount.value;
  const quoteCountValue = quoteCount.value;
  const likeCountValue = likeCount.value;
  console.log("pritam");


  const userTweetObj = {
    userFullNameValue,
    userNameValue,
    userTweetValue,
    userTweetTimeValue,
    userTweetDateValue,
    userTweetDeviceValue,
    retweetCountValue,
    quoteCountValue,
    likeCountValue
  }


  getTweetPreview({ tweet: userTweetObj })
};

btnGenerate.addEventListener('click', getTweetValues);


