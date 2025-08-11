import Input from './components/Input';
import Add from './components/Add';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Navbar } from './components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function App() {
  const [formInputs, setFormInputs] = useState([
    { id: uuidv4(), resourceType: '', resourceSubType: '', quantity: '', region: '' },
  ]);
  const [currentResourceId, setCurrentResourceId] = useState(0);
  const [result, setResult] = useState({});

  const handleClick = (e) => {
    e.preventDefault();
    setFormInputs([
      ...formInputs,
      { id: uuidv4(), resourceType: '', resourceSubType: '', quantity: '', region: '' },
    ]);
  };

  const handleChange = (id, field, e) => {
    setFormInputs(formInputs.map(el => el.id === id ? { ...el, [field]: e.target.value } : el));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/prices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formInputs),
    })
      .then(res => res.json())
      .then(setResult);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (currentResourceId > 0) setCurrentResourceId(currentResourceId - 1);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentResourceId < formInputs.length - 1) {
      setCurrentResourceId(currentResourceId + 1);
    } else {
      handleClick(e);
      setCurrentResourceId(currentResourceId + 1);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <form
          className="bg-white p-6 rounded-xl shadow-lg space-y-6 border border-gray-200"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-semibold text-blue-600">Resource Input</h3>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={formInputs[currentResourceId].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Input
                  i={formInputs[currentResourceId].id}
                  handleChange={handleChange}
                  value={formInputs[currentResourceId]}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4">
            <button
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              onClick={handlePrev}
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              onClick={handleNext}
            >
              <FiChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center gap-2">
            {formInputs.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentResourceId ? 'bg-blue-500' : 'bg-gray-400'
                }`}
              ></span>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition"
            >
              Submit
            </button>
          </div>
        </form>

        {result?.resources && (
  <div className="mt-8 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
    <div className="bg-blue-600 text-white px-6 py-4">
      <h2 className="text-lg font-semibold">Pricing Details</h2>
    </div>

    <div className="divide-y divide-gray-200">
      {result.resources.map((res, index) => (
        <div
          key={index}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-6 py-4 text-sm"
        >
          <div className="col-span-1">
            <p className="font-medium">{res.resourceType}</p>
            <p className="text-gray-500">{res.resourceSubType}</p>
          </div>
          <div className="col-span-1 text-gray-700">
            Qty: {res.quantity}
          </div>
          <div className="col-span-1 text-right font-medium text-green-600">
            ₹{res.totalPrice?.toLocaleString("en-IN")}
          </div>
        </div>
      ))}
    </div>

    {/* Total Section */}
    <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
      <span className="font-semibold text-gray-800">Total Amount</span>
      <span className="text-lg font-bold text-green-700">
        ₹{result.resources.reduce((sum, r) => sum + (r.totalPrice || 0), 0).toLocaleString("en-IN")}
      </span>
    </div>
  </div>
)}

      </main>
    </div>
  );
}

export default App;
