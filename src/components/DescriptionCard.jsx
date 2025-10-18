import { useProductStore } from "../store/useProductsStore";

export const DescriptionCard = () => {
  const activeProduct = useProductStore((s) => s.activeProduct);
  const productHovered = useProductStore((s) => s.productHovered);

  const imagsrc =
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

  return (
    <div className={`product-card-wrapper ${productHovered ? "active" : ""}`}>
      <div className="product-card">
        <div className="product-badge">
          {activeProduct ? activeProduct.category : " "}
        </div>
        <div className="product-title-effect">
          <div className="product-image">
            <img
              src={activeProduct ? activeProduct.image : imagsrc}
              alt="Premium Watch"
            />
          </div>
        </div>
        <div className="product-info">
          <div className="product-category">
            {activeProduct ? activeProduct.category : ""}
          </div>
          <h2 className="product-title">
            {activeProduct ? activeProduct.title : ""}
          </h2>
          <div className="product-description">
            <p>{activeProduct ? activeProduct.description : ""}</p>
          </div>
          <div className="product-features">
            <span className="feature">Water Resistant</span>
            <span className="feature">5-Year Warranty</span>
            <span className="feature">Swiss Made</span>
          </div>
          <div className="product-bottom">
            <div className="product-price">
              <span className="price-was">
                {activeProduct ? activeProduct.priceWas : ""}
              </span>
              <span className="price-now">
                {activeProduct ? activeProduct.priceNow : ""}
              </span>
            </div>
            <button className="product-button">
              <span className="button-text">Add to Cart</span>
              <svg
                className="button-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>
          </div>
          <div className="product-meta">
            <div className="product-rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#FFD700"
                stroke="#FFD700"
                strokeWidth="0.5"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#FFD700"
                stroke="#FFD700"
                strokeWidth="0.5"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#FFD700"
                stroke="#FFD700"
                strokeWidth="0.5"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#FFD700"
                stroke="#FFD700"
                strokeWidth="0.5"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#FFD700"
                stroke="#FFD700"
                strokeWidth="0.5"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span className="rating-count">128 Reviews</span>
            </div>
            <div className="product-stock">In Stock</div>
          </div>
        </div>
      </div>
    </div>
  );
};
