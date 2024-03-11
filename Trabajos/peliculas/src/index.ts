import IndexController from "./controller/IndexController.js"
import IndexModel from "./model/IndexModel.js"
import IndexView from "./view/IndexView.js"

//Se crea un istancia en la computadira 
const indexController = new IndexController(new IndexView(),
new IndexModel()) //---> Es el main, es por donde arranca la aplicación
indexController.start()

