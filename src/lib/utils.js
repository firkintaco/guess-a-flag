export const shuffle = (array) => {
	return array.sort((a, b) => 0.5 - Math.random());
};
export const getErrorMessage = (errorCode) => {
	switch (errorCode) {
		case 'auth/invalid-email':
			return 'Invalid e-mail address';
		case 'auth/weak-password':
			return 'The password is too weak';
		case 'auth/invalid-credential':
			return 'Invalid credentials';
		case 'auth/email-already-in-use':
			return 'Email address is already in use';
		case 'auth/operation-not-allowed':
			return 'Operation not allowed';
		case 'auth/user-not-found':
			return 'No user found with email';
		case 'auth/wrong-password':
			return 'Wrong password!';
		default:
			return 'Error';
	}
};
