import Layout from '../components/Layout';
import ChefsRegistrationForm from '../components/ChefsRegistrationForm'

export default function ChefsRegistration() {
  return (
    <Layout>
      <div className="mt-5 text-center">
        <p>Fill the following form to register your activity</p>
      </div>
      <div className="card chefs-registration-card bg-light p-4">
        <ChefsRegistrationForm />
      </div>
    </Layout>
  );
}
