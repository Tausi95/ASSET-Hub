import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Network.css';

function Network() {
  const [searchTerm, setSearchTerm] = useState('');
  const [connections, setConnections] = useState([]);
  const [filteredConnections, setFilteredConnections] = useState([]);
  const [networkDatabase, setNetworkDatabase] = useState([]);
  const [filteredNetwork, setFilteredNetwork] = useState([]);

  // Fetch user connections from the backend
  const fetchConnections = async () => {
    try {
      const response = await axios.get('/api/connections');
      setConnections(response.data);
      setFilteredConnections(response.data);
    } catch (error) {
      console.error('Error fetching connections', error);
    }
  };

  // Fetch network database from the backend
  const fetchNetworkDatabase = async () => {
    try {
      const response = await axios.get('/api/network');
      setNetworkDatabase(response.data);
      setFilteredNetwork(response.data);
    } catch (error) {
      console.error('Error fetching network database', error);
    }
  };

  // Handle search
  const handleSearch = async (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    try {
      // Search connections
      const filteredConnections = connections.filter(connection =>
        connection.name.toLowerCase().includes(term.toLowerCase()) ||
        connection.profession.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredConnections(filteredConnections);

      // Search network database
      const response = await axios.get(`/api/network/search?term=${term}`);
      setFilteredNetwork(response.data);
    } catch (error) {
      console.error('Error searching network', error);
    }
  };

  // Handle connection request
  const handleConnect = async (name) => {
    try {
      await axios.post('/api/network/connect', { name });
      alert('Connection request sent!');
    } catch (error) {
      console.error('Error sending connection request', error);
    }
  };

  useEffect(() => {
    fetchConnections();
    fetchNetworkDatabase();
  }, []);

  return (
    <div className="network-container">
      <h1>Network</h1>
      <p>Connect with professionals and peers in the STEM field.</p>

      <section className="my-network">
        <h2>My Network</h2>
        <p>Manage your professional connections or explore new ones.</p>

        <input 
          type="text"
          placeholder="Search connections by name or profession..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />

        <ul className="connection-list">
          {filteredConnections.length > 0 ? (
            filteredConnections.map((connection, index) => (
              <li key={index} className="connection-item">
                <strong>{connection.name}</strong> - {connection.profession}
                <button className="connect-btn">Message</button>
              </li>
            ))
          ) : (
            <p>No connections found in your network.</p>
          )}
        </ul>
      </section>

      {filteredConnections.length === 0 && (
        <section className="broader-network">
          <h2>Search the ASSETHub Network</h2>
          <p>Find new professionals to connect with.</p>

          <ul className="connection-list">
            {filteredNetwork.length > 0 ? (
              filteredNetwork.map((connection, index) => (
                <li key={index} className="connection-item">
                  <strong>{connection.name}</strong> - {connection.profession}
                  <button 
                    className="connect-btn"
                    onClick={() => handleConnect(connection.name)}
                  >
                    Connect
                  </button>
                </li>
              ))
            ) : (
              <p>No professionals found in the network database.</p>
            )}
          </ul>
        </section>
      )}
    </div>
  );
}

export default Network;

