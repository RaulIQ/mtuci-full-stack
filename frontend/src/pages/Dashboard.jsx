import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Моковые данные для списка документов
  const documents = [
    { id: 1, name: 'Biology_notes.pdf', date: '2023-10-01' },
    { id: 2, name: 'History_lecture.pdf', date: '2023-10-05' }
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>FlashLearn Dashboard</h1>
        {/* Кнопка загрузки вынесена сюда */}
        <Link to="/upload" style={styles.uploadBtn}>+ Upload PDF</Link>
      </header>
      
      <section style={styles.section}>
        <h3>My Documents</h3>
        {documents.length > 0 ? (
          <ul style={styles.list}>
            {documents.map(doc => (
              <li key={doc.id} style={styles.listItem}>
                <div style={styles.docInfo}>
                  <span style={styles.docName}>{doc.name}</span>
                  <span style={styles.docDate}>{doc.date}</span>
                </div>
                {/* Переход к изучению */}
                <Link to={`/study/${doc.id}`} style={styles.studyBtn}>Study</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No documents yet. Upload a PDF to start!</p>
        )}
      </section>
    </div>
  );
};

const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '20px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '2px solid #eee', paddingBottom: '20px' },
  uploadBtn: { padding: '10px 20px', background: '#27ae60', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' },
  section: { background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' },
  list: { listStyle: 'none', padding: 0 },
  listItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #f0f0f0' },
  docInfo: { display: 'flex', flexDirection: 'column' },
  docName: { fontWeight: 'bold', fontSize: '1.1rem' },
  docDate: { fontSize: '0.8rem', color: '#888' },
  studyBtn: { padding: '8px 16px', border: '1px solid #3498db', color: '#3498db', textDecoration: 'none', borderRadius: '4px' }
};

export default Dashboard;