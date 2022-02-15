import React from "react";
import { Col, Row, Image, Card } from "react-bootstrap";
import TeamImg from "./../assets/IMG-GROUP.jpg";
import Fade from "react-reveal/Fade";
const Description = () => {
  return (
    <>
      <Row className="m-5">
        <Col md={6}>
          <Fade delay={200}>
            <Image fluid src={TeamImg} />
          </Fade>
        </Col>
        <Col md={6}>
          <Fade delay={300}>
            <Card className="ps-3 pe-5 py-2 text-start">
              <Card.Body>
                <Card.Title className="pb-2">
                  <h2>Bimbingan Online Singaraja</h2>
                </Card.Title>
                <Card.Text className="lh-lg">
                  Selain menguasai materi modul, kunci keberhasilan lulus ujian
                  / seleksi adalah seberapa banyak pengalaman kita berlatih soal
                  ujian / seleksi. Pembahasan soal secara komprehensif oleh
                  instruktur berpengalaman juga sangat penting. Selain itu,
                  pengalaman mengikuti ujian / seleksi versi Computer Based Test
                  (CBT) juga sangat menentukan kelulusan ujian / seleksi. Akan
                  tetapi, pengalaman ini sangat sulit diperoleh oleh peserta
                  ujian / seleksi. Untuk itu, kami Bimon Singaraja, lembaga
                  bimbingan belajar, hadir secara online untuk bisa bersama-sama
                  menyiapkan diri untuk mengikuti ujian / seleksi berbasis CBT.
                  CBT yang kami kembangkan sangat mirip dengan versi CBT tempat
                  melaksanakan ujian / seleksi. Soal yang kami kembangkan juga
                  mengacu pada kisi-kisi dan dibuat oleh instruktur
                  berpengalaman. Mari bergabung dengan kami, Bimon Singaraja.
                  Semoga kami bisa menjadi mitra bapak dan ibu meraih cita-cita.
                  Salam, Bimon SIngaraja.
                </Card.Text>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
      </Row>
    </>
  );
};

export default Description;
