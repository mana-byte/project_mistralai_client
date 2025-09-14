'use client';
import { useState } from 'react';

export default function UploadForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitStatus, setSubmitStatus] = useState('');
  const [dismissText, setDismissText] = useState("");
  const [comment, setComment] = useState("?");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0] || null);
    setSubmitStatus('Send');
    setDismissText("Dismiss");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitStatus("");
    setDismissText("");
    const formData = new FormData();
    if (selectedFile) formData.append('file', selectedFile);
    setIsLoading(true);

    const response = await fetch('http://localhost:8000/foods', {
      method: 'POST',
      body: formData,
    });
    // content is a Json => stringify the keys in comment
    const data = await response.json();
    console.log(data);
    setComment(Object.keys(data).join(', '));
    setIsLoading(false);

    if (response.ok) {
      console.log('File uploaded successfully');
      setSelectedFile(null); // Reset file input
    } else {
      console.error('Error uploading file');
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow" style={{ maxWidth: 400, width: '100%' }}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">Analyze Food Image</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-center">
              {selectedFile ? (
                <div style={{ testAlign: 'center', marginBottom: '10px' }}>
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected"
                      className="img-fluid rounded mb-3"
                      style={{ maxHeight: 200 }}
                    />
                </div>
              ) : (
                <input
                  type="file"
                  className="form-control"
                  id="exampleFormControlFile1"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              )}
            </div>
            <div className="d-flex justify-content-center gap-2 mt-3">
              <button type="submit" className="btn btn-dark">{submitStatus || "Send"}</button>
              <button
                type="reset"
                className="btn btn-outline-secondary"
                onClick={() => { setSelectedFile(null); setSubmitStatus(''); setDismissText(''); }}
              >
                {dismissText || "Dismiss"}
              </button>
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '12px', color: '#888' }}>
                { isLoading ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '3vh', marginTop: '10px' }}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    </div>
                ) : (
                  <p style={{ marginTop: '10px' }}> Detected : {comment}</p>

                )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
