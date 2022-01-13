const firebaseConfig = {
  apiKey: "AIzaSyCyYmGeyZpEDGCxsOd4QhzKUdiQfjkVY-Y",
  authDomain: "find-pokemon-18b15.firebaseapp.com",
  projectId: "find-pokemon-18b15",
  storageBucket: "find-pokemon-18b15.appspot.com",
  messagingSenderId: "792012936861",
  appId: "1:792012936861:web:52917551bc3dedc29ae674",
};

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return firebaseConfig;
  }
}
