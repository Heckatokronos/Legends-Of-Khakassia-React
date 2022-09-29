module Api
  module V1
    class ProductsController < ApplicationController
      def index
        @products = Product.all
        render json: { products: @products }, methods: [:image_url]
      end

      def new
        @products = Product.new
      end

      def create
        @products = Product.new(products_params)
        if @products.save
          redirect_to @products
        else
          render :new, status: :unprocessable_entity
        end
      end

      def destroy
        @products = Product.find(products_params)
        @products.destroy
      end

      def update
        if @products.update(products_params)
          render json: { products: @products }, status: 200
        end
      end

      private

      def products_params
        params.require(:product).permit(:title, :price, :description, :image)
      end
    end
  end
end
