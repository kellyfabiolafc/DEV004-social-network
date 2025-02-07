import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword, sendPasswordResetEmail, signOut
} from 'firebase/auth';

export const signInWithPassword = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};
export const signInWithGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const registerWithEmail = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};

export const mostrarVentanaRecuperarContraseña = (email) => {
  const auth = getAuth();
  return sendPasswordResetEmail(auth, email);
};
export const openModal = (message) => {
  document.querySelector('.modal').style.display = 'block';
  document.querySelector('.modal-content > p:nth-child(2)').textContent = message;
  document.querySelector('.modal-content > p:nth-child(2)').style.color = 'black';
};
export const cerrarsesion = () => {
  const auth = getAuth();
  return signOut(auth);
};
