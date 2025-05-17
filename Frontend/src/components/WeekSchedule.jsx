import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ day: '', date: '', subject: '', time: '', description: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    const res = await axios.get('https://coaching-management-system-9w2s.onrender.com/api/planner');
    setEntries(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`https://coaching-management-system-9w2s.onrender.com/api/planner/${editId}`, form);
    } else {
      await axios.post('https://coaching-management-system-9w2s.onrender.com/api/planner', form);
    }
    setForm({ day: '', date: '', subject: '', time: '', description: '' });
    setEditId(null);
    fetchEntries();
  };

  const handleEdit = (entry) => {
    setForm(entry);
    setEditId(entry._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://coaching-management-system-9w2s.onrender.com/api/planner/${id}`);
    fetchEntries();
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">📘 Teacher Weekly Planner</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input className="input-style" placeholder="Day" value={form.day} onChange={e => setForm({ ...form, day: e.target.value })} required />
          <input className="input-style" type="date" placeholder="Date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required />
          <input className="input-style" placeholder="Subject" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} required />
          <input className="input-style" placeholder="Time" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} required />
          <textarea className="input-style md:col-span-2" placeholder="Class" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />

          <button type="submit" className="md:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            {editId ? 'Update' : 'Add'} Schedule
          </button>
        </form>

        <div className="grid gap-4">
          {entries.map(entry => (
            <div key={entry._id} className="bg-blue-50 p-4 rounded shadow flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-blue-800">{entry.day} - {entry.date}</h3>
                <p><b>📚 Subject:</b> {entry.subject}</p>
                <p><b>🕒 Time:</b> {entry.time}</p>
                {entry.description && <p><b>📝 Class :</b> {entry.description}</p>}
              </div>
              <div className="mt-3 md:mt-0 flex gap-2">
                <button onClick={() => handleEdit(entry)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">Edit</button>
                <button onClick={() => handleDelete(entry._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
