"use client";
import { useEffect, useState } from 'react';
import EditPage from './../../components/edit';

export default function Test() {
  const [id, setId] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    if (idParam) {
      setId(idParam);
      // console.log(idParam); // Logs the ID when it's available
    }
  }, []);

  return <EditPage id={id} />;
}
