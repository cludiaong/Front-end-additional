import Header from './components/Header'
import Objects from './components/Objects'

function App() {
  return (
    <div class="d-flex flex-column h-100">
      <Header />
      <div class="container p-0">
        <div
          class="
              d-flex
              flex-wrap
              justify-content-center
              justify-content-lg-evenly
              justify-content-xxl-between
          "
        >
        <Objects gambar= "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/399/0239990_PE379591_S4.jpg" name="Sofa Klippan-IKEA" />
        <Objects gambar= "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/021/0602104_PE680173_S4.jpg" name="Sofa Landskrona-IKEA" />
        <Objects gambar= "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/509/0950900_PE800740_S4.jpg" name="Sofa Glostad-IKEA"/>
        </div>
      </div>
    </div>
  );
}

export default App;
