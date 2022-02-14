import React from "react";
import { Row } from "react-bootstrap";
import RegisterCard from "./RegisterCard";

const Register = () => {
  return (
    <>
      <Row className="g-0 p-4">
        <h1 className="text-center py-5 text-black">Cara Daftar</h1>
        <RegisterCard
          title="Daftar"
          desc="Lengkapi data pada form pendaftaran untuk melakukan pendaftaran."
          icon="0"
          delay={200}
        />
        <RegisterCard
          title="Pembayaran"
          desc="Setelah berhasil melakukan pendaftaran lakukan pembayaran"
          icon="1"
          delay={400}
        />
        <RegisterCard
          title="Ikut Kursus"
          desc="Konfirmasi pembayaran dan ikuti semua kursus yang tersedia"
          icon="2"
          delay={600}
        />
      </Row>
    </>
  );
};

export default Register;
