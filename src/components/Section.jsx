export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// ...props, nella destrutturazione della funzione usa il REST operator, con quella funzione di js (...) raggruppa tutti le proprietà rimanenti dell'oggetto, creando un nuovo oggetto in questo caso dal nome props.

// Nel return della funzione (...props) usa lo SPREAD operator, si scrive uguale ma in questo caso ha la funzione opposta, sparge i dati e le proprietà nell'elemento
