class CarsController < ApplicationController
  before_action :set_car, only: %i[ show update destroy ]

  # GET /cars
  def index
    @cars = Car.all

    render json: @cars.to_json(except: [:created_at, :updated_at])
  end

  # GET /cars/1
  def show
    render json: @car.to_json(except: [:created_at, :updated_at])
  end

  # POST /cars
  def create
    
    @car = Car.new(car_params)
    
    if @car.save
      render json: @car, status: :created, location: @car
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cars/1
  def update
    if @car.update(car_params)
      render json: @car
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cars/1
  def destroy
    @car.destroy
    render json: {message: "Category successfully deleted"}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_car
      @car = Car.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def car_params
      params.require(:car).permit(:brand, :model, :exterior_color, :interior_color, :fuel_type, :category_id, :integer)
    end
end
