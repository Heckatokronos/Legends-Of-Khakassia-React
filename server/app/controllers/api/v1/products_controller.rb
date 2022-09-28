module Api
  module V1
    class ProductsController < ApplicationController
      def index
        @products = Product.all
        render json: { products: @products }, status: 200
      end

      def create
        @product = Product.new(products_params)
        if @product.save
          render json: @product, status: 201
        else
          render json: { message: @product.errors.full_messages }, status: 400
        end
      end

      def destroy
        @product = Product.find(products_params)
        @product.destroy
      end

      def update
        if @product.update(products_params)
          render json: { products: @products }, status: 200
        end
      end

      private

      def products_params
        params.require(:products).permit(:title, :price, :description)
      end
    end
  end
end
