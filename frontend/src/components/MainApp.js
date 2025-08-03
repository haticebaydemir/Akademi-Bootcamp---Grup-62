import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SoruEditoru from './SoruEditoru';
import SinavOlusturma from './SinavOlusturma';
import SinavAnaliz from './SinavAnaliz';
import Bolumler from './Bolumler';
import DonemIslemleri from './DonemIslemleri';
import Dersler from './Dersler';
import Kullanicilar from './Kullanicilar';

function MainApp() {
  return (
    <Routes>
      <Route path="/" element={<SoruEditoru />} />
      <Route path="/sinav-olusturma" element={<SinavOlusturma />} />
      <Route path="/sinav-analiz" element={<SinavAnaliz />} />
      <Route path="/bolumler" element={<Bolumler />} />
      <Route path="/donem-islemleri" element={<DonemIslemleri />} />
      <Route path="/dersler" element={<Dersler />} />
      <Route path="/kullanicilar" element={<Kullanicilar />} />
    </Routes>
  );
}

export default MainApp; 