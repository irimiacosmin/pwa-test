import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";
import constants from "../constants.js";
import storage from "../services/Storage.js";

export default class ProductsController extends ContainerController {
	constructor(element, history) {
		super(element, history);

		this.setModel({});

		this.model.addExpression('productsListLoaded',  () => {
			return typeof this.model.products !== "undefined";
		}, 'products');


		storage.getItem(constants.PRODUCTS_STORAGE_PATH, 'json', (err, products) => {
			if(err){
				//todo: implement better error handling
				//throw err;
			}

			if (typeof products === "undefined" || products === null) {
				return this.model.products = [];
			}

			const lastVersionProducts = products.map(product => {
				const versions = Object.values(product)[0];
				return versions[versions.length - 1];
			});
			this.model.products = lastVersionProducts;
		});

		this.on("add-product", (event)=>{
			event.stopImmediatePropagation();
			//this.History.navigateToPageByTag("manage-product");
			history.push("?manage-product");
		});

		this.on('edit-product', (event) => {
			let target = event.target;
			let targetProduct = target.getAttribute("gtin");
			const index = parseInt(targetProduct.replace(/\D/g, ''));
			history.push("?manage-product", index);
		}, {capture: true});

		this.on("view-drug", (event)=>{
			history.push("?drug-details");
		});

		this.on('openFeedback', (e) => {
			this.feedbackEmitter = e.detail;
		});
	}
}