import Footer from './Footer';

const layoutStyle = {
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const Layout = props => (
  <div style={layoutStyle}>
    <div style={{flex: 1}}>
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;