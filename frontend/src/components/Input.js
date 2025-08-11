const Input = ({ i, handleChange, value }) => {
  const resourceSubType = {
    Compute: ['CPU - General Purpose', 'GPU - NVIDIA T4', 'High Memory Instance'],
    Database: ['MySQL', 'PostgreSQL', 'MongoDB'],
    Storage: ['S3 / Object Storage', 'Block Storage - SSD', 'Block Storage - HDD'],
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1 text-sm text-gray-700 font-medium">Resource Type</label>
        <select
          value={value.resourceType}
          onChange={(e) => handleChange(i, 'resourceType', e)}
          className="w-full bg-white border border-gray-300 text-gray-900 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option disabled value="">Select a resource type</option>
          <option value="Compute">Compute</option>
          <option value="Database">Database</option>
          <option value="Storage">Storage</option>
        </select>
      </div>

      {value.resourceType && (
        <div>
          <label className="block mb-1 text-sm text-gray-700 font-medium">Resource Sub-Type</label>
          <select
            onChange={(e) => handleChange(i, 'resourceSubType', e)}
            className="w-full bg-white border border-gray-300 text-gray-900 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option disabled selected>Select</option>
            {resourceSubType[value.resourceType].map((val, index) => (
              <option value={val} key={index}>{val}</option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label className="block mb-1 text-sm text-gray-700 font-medium">Number of Units</label>
        <input
          type="number"
          min="0"
          value={value.quantity}
          onChange={(e) => handleChange(i, 'quantity', e)}
          className="w-full bg-white border border-gray-300 text-gray-900 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-700 font-medium">Region</label>
        <select
          value={value.region}
          onChange={(e) => handleChange(i, 'region', e)}
          className="w-full bg-white border border-gray-300 text-gray-900 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option disabled value="">Select a region</option>
          <option value="US East">US East</option>
          <option value="US West">US West</option>
          <option value="Europe">Europe</option>
        </select>
      </div>
    </div>
  );
};

export default Input;
