// Initialize Firebase
const firebaseConfig = {
    // Your Firebase configuration
};
firebase.initializeApp(firebaseConfig);

// Get reference to Firestore
const db = firebase.firestore();

// Get currently authenticated user
const user = firebase.auth().currentUser;

// Get user document from Firestore
if (user) {
    const userInfoRef = db.collection('users').doc(user.uid);
    userInfoRef.get().then((doc) => {
        if (doc.exists) {
            const userData = doc.data();
            document.getElementById('user-info').innerHTML = `
                <h2>${userData.fullName}</h2>
                <p>${user.email}</p>
                <p>${userData.phoneNumber}</p>
            `;
            document.getElementById('college-name').textContent = userData.collegeName;
            document.getElementById('department').textContent = userData.department;
            document.getElementById('student-id').textContent = userData.studentID;
            document.getElementById('year-of-study').textContent = userData.yearOfStudy;
        } else {
            console.log('No such document!');
        }
    }).catch((error) => {
        console.log('Error getting document:', error);
    });
}