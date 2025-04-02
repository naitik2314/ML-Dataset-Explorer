// Mock Datasets
export const mockDatasets = [{
  id: "iris",
  name: "Iris Flower Dataset",
  description: "Classic dataset for classification, containing 3 classes of 50 instances each",
  recordCount: 150,
  features: 4,
  type: "Classification",
  columns: ["sepal_length", "sepal_width", "petal_length", "petal_width", "species"],
  previewData: [{
    sepal_length: 5.1,
    sepal_width: 3.5,
    petal_length: 1.4,
    petal_width: 0.2,
    species: "setosa"
  }, {
    sepal_length: 4.9,
    sepal_width: 3.0,
    petal_length: 1.4,
    petal_width: 0.2,
    species: "setosa"
  }, {
    sepal_length: 7.0,
    sepal_width: 3.2,
    petal_length: 4.7,
    petal_width: 1.4,
    species: "versicolor"
  }, {
    sepal_length: 6.3,
    sepal_width: 3.3,
    petal_length: 6.0,
    petal_width: 2.5,
    species: "virginica"
  }, {
    sepal_length: 5.8,
    sepal_width: 2.7,
    petal_length: 5.1,
    petal_width: 1.9,
    species: "virginica"
  }]
}, {
  id: "housing",
  name: "Boston Housing Dataset",
  description: "Dataset for regression tasks, predicting median home values",
  recordCount: 506,
  features: 13,
  type: "Regression",
  columns: ["CRIM", "ZN", "INDUS", "CHAS", "NOX", "RM", "MEDV"],
  previewData: [{
    CRIM: 0.00632,
    ZN: 18.0,
    INDUS: 2.31,
    CHAS: 0,
    NOX: 0.538,
    RM: 6.575,
    MEDV: 24.0
  }, {
    CRIM: 0.02731,
    ZN: 0.0,
    INDUS: 7.07,
    CHAS: 0,
    NOX: 0.469,
    RM: 6.421,
    MEDV: 21.6
  }, {
    CRIM: 0.02729,
    ZN: 0.0,
    INDUS: 7.07,
    CHAS: 0,
    NOX: 0.469,
    RM: 7.185,
    MEDV: 17.8
  }, {
    CRIM: 0.03237,
    ZN: 0.0,
    INDUS: 2.18,
    CHAS: 0,
    NOX: 0.458,
    RM: 6.998,
    MEDV: 18.7
  }, {
    CRIM: 0.06905,
    ZN: 0.0,
    INDUS: 2.18,
    CHAS: 0,
    NOX: 0.458,
    RM: 7.147,
    MEDV: 18.3
  }]
}, {
  id: "wine",
  name: "Wine Quality Dataset",
  description: "Dataset related to red and white variants of Portuguese wine",
  recordCount: 6497,
  features: 11,
  type: "Classification",
  columns: ["fixed_acidity", "volatile_acidity", "citric_acid", "residual_sugar", "quality"],
  previewData: [{
    fixed_acidity: 7.4,
    volatile_acidity: 0.7,
    citric_acid: 0.0,
    residual_sugar: 1.9,
    quality: 5
  }, {
    fixed_acidity: 7.8,
    volatile_acidity: 0.88,
    citric_acid: 0.0,
    residual_sugar: 2.6,
    quality: 5
  }, {
    fixed_acidity: 7.8,
    volatile_acidity: 0.76,
    citric_acid: 0.04,
    residual_sugar: 2.3,
    quality: 6
  }, {
    fixed_acidity: 11.2,
    volatile_acidity: 0.28,
    citric_acid: 0.56,
    residual_sugar: 1.9,
    quality: 6
  }, {
    fixed_acidity: 7.4,
    volatile_acidity: 0.7,
    citric_acid: 0.0,
    residual_sugar: 1.9,
    quality: 5
  }]
}, {
  id: "digits",
  name: "Handwritten Digits Dataset",
  description: "Images of handwritten digits for image classification tasks",
  recordCount: 1797,
  features: 64,
  type: "Image Classification",
  columns: ["pixel_1", "pixel_2", "pixel_3", "pixel_4", "label"],
  previewData: [{
    pixel_1: 0,
    pixel_2: 0,
    pixel_3: 5,
    pixel_4: 13,
    label: 0
  }, {
    pixel_1: 0,
    pixel_2: 0,
    pixel_3: 0,
    pixel_4: 16,
    label: 1
  }, {
    pixel_1: 0,
    pixel_2: 0,
    pixel_3: 10,
    pixel_4: 12,
    label: 2
  }, {
    pixel_1: 0,
    pixel_2: 1,
    pixel_3: 14,
    pixel_4: 16,
    label: 3
  }, {
    pixel_1: 0,
    pixel_2: 0,
    pixel_3: 6,
    pixel_4: 16,
    label: 4
  }]
}, {
  id: "sentiment",
  name: "Sentiment Analysis Dataset",
  description: "A dataset for sentiment analysis on social media posts",
  recordCount: 1000,
  features: 1,
  type: "Text Classification",
  columns: ["text", "sentiment"],
  previewData: [
    { text: "I love this product!", sentiment: "positive" },
    { text: "This experience was terrible.", sentiment: "negative" }
  ]
}];
// Mock Models
export const mockModels = [{
  id: "logistic_regression",
  name: "Logistic Regression",
  type: "Classification",
  description: "A statistical model that uses a logistic function to model a binary dependent variable"
}, {
  id: "decision_tree",
  name: "Decision Tree",
  type: "Classification",
  description: "A decision support tool that uses a tree-like model of decisions"
}, {
  id: "random_forest",
  name: "Random Forest",
  type: "Classification",
  description: "An ensemble learning method that constructs multiple decision trees"
}, {
  id: "svm",
  name: "Support Vector Machine",
  type: "Classification",
  description: "A supervised learning model with associated learning algorithms"
}, {
  id: "linear_regression",
  name: "Linear Regression",
  type: "Regression",
  description: "A linear approach to modeling the relationship between a dependent variable and independent variables"
}, {
  id: "ridge_regression",
  name: "Ridge Regression",
  type: "Regression",
  description: "A technique for analyzing multiple regression data that suffer from multicollinearity"
}, {
  id: "lasso_regression",
  name: "Lasso Regression",
  type: "Regression",
  description: "A regression analysis method that performs both variable selection and regularization"
}, {
  id: "cnn",
  name: "Convolutional Neural Network",
  type: "Image Classification",
  description: "A class of deep neural networks most commonly applied to analyzing visual imagery"
}, {
  id: "knn",
  name: "K-Nearest Neighbors",
  type: "Classification",
  description: "A non-parametric method used for classification and regression"
}, {
  id: "xgboost",
  name: "XGBoost",
  type: "Classification",
  description: "An optimized gradient boosting machine learning library"
}, {
  id: "lightgbm",
  name: "LightGBM",
  type: "Classification",
  description: "A fast, high performance gradient boosting framework"
}];
// Mock Performance Data
export const mockPerformanceData = [{
  modelId: "logistic_regression",
  datasetId: "iris",
  metrics: {
    accuracy: 0.96,
    precision: 0.95,
    recall: 0.94,
    f1Score: 0.945,
    trainingTime: 0.15
  },
  color: "#4C51BF" // indigo-700
}, {
  modelId: "decision_tree",
  datasetId: "iris",
  metrics: {
    accuracy: 0.92,
    precision: 0.91,
    recall: 0.92,
    f1Score: 0.915,
    trainingTime: 0.08
  },
  color: "#2B6CB0" // blue-700
}, {
  modelId: "random_forest",
  datasetId: "iris",
  metrics: {
    accuracy: 0.98,
    precision: 0.97,
    recall: 0.98,
    f1Score: 0.975,
    trainingTime: 0.32
  },
  color: "#2F855A" // green-700
}, {
  modelId: "svm",
  datasetId: "iris",
  metrics: {
    accuracy: 0.97,
    precision: 0.96,
    recall: 0.97,
    f1Score: 0.965,
    trainingTime: 0.25
  },
  color: "#C05621" // orange-700
}, {
  modelId: "linear_regression",
  datasetId: "housing",
  metrics: {
    accuracy: 0.72,
    precision: 0.71,
    recall: 0.70,
    f1Score: 0.705,
    trainingTime: 0.18
  },
  color: "#4C51BF" // indigo-700
}, {
  modelId: "ridge_regression",
  datasetId: "housing",
  metrics: {
    accuracy: 0.75,
    precision: 0.74,
    recall: 0.73,
    f1Score: 0.735,
    trainingTime: 0.22
  },
  color: "#2B6CB0" // blue-700
}, {
  modelId: "lasso_regression",
  datasetId: "housing",
  metrics: {
    accuracy: 0.73,
    precision: 0.72,
    recall: 0.71,
    f1Score: 0.715,
    trainingTime: 0.20
  },
  color: "#2F855A" // green-700
}, {
  modelId: "logistic_regression",
  datasetId: "wine",
  metrics: {
    accuracy: 0.85,
    precision: 0.84,
    recall: 0.83,
    f1Score: 0.835,
    trainingTime: 0.45
  },
  color: "#4C51BF" // indigo-700
}, {
  modelId: "random_forest",
  datasetId: "wine",
  metrics: {
    accuracy: 0.92,
    precision: 0.91,
    recall: 0.90,
    f1Score: 0.905,
    trainingTime: 0.78
  },
  color: "#2F855A" // green-700
}, {
  modelId: "cnn",
  datasetId: "digits",
  metrics: {
    accuracy: 0.99,
    precision: 0.98,
    recall: 0.98,
    f1Score: 0.98,
    trainingTime: 5.23
  },
  color: "#C05621" // orange-700
}, {
  modelId: "knn",
  datasetId: "digits",
  metrics: {
    accuracy: 0.97,
    precision: 0.96,
    recall: 0.96,
    f1Score: 0.96,
    trainingTime: 0.12
  },
  color: "#6B46C1" // purple-700
}, {
  modelId: "xgboost",
  datasetId: "sentiment",
  metrics: {
    accuracy: 0.88,
    precision: 0.87,
    recall: 0.86,
    f1Score: 0.865,
    trainingTime: 0.35
  },
  color: "#805AD5"
}, {
  modelId: "lightgbm",
  datasetId: "sentiment",
  metrics: {
    accuracy: 0.90,
    precision: 0.89,
    recall: 0.88,
    f1Score: 0.885,
    trainingTime: 0.30
  },
  color: "#D69E2E"
}];
// Mock Data Insights
export const mockDataInsights = [{
  id: "insight_iris_1",
  datasetId: "iris",
  title: "Balanced Classes",
  description: "This dataset has perfectly balanced classes (50 samples each), making it ideal for classification tasks.",
  recommendations: [{
    modelType: "Logistic Regression",
    suitable: true,
    reason: "Works well with linearly separable classes in this dataset."
  }, {
    modelType: "Decision Trees",
    suitable: true,
    reason: "Can easily capture the decision boundaries between flower species."
  }, {
    modelType: "Neural Networks",
    suitable: false,
    reason: "Likely overkill for this simple dataset with clear boundaries."
  }]
}, {
  id: "insight_housing_1",
  datasetId: "housing",
  title: "Continuous Target Variable",
  description: "This dataset has a continuous target variable (housing prices), making it suitable for regression tasks.",
  recommendations: [{
    modelType: "Linear Regression",
    suitable: true,
    reason: "Good baseline for this type of continuous prediction task."
  }, {
    modelType: "Ridge/Lasso Regression",
    suitable: true,
    reason: "Helpful when dealing with potential multicollinearity in housing features."
  }, {
    modelType: "Classification Models",
    suitable: false,
    reason: "Not appropriate for predicting continuous housing prices."
  }]
}, {
  id: "insight_wine_1",
  datasetId: "wine",
  title: "Imbalanced Quality Classes",
  description: "This dataset has imbalanced classes with more medium-quality wines than high or low quality.",
  recommendations: [{
    modelType: "Random Forest",
    suitable: true,
    reason: "Handles class imbalance well through ensemble methods."
  }, {
    modelType: "Basic Logistic Regression",
    suitable: false,
    reason: "May be biased toward the majority class without proper weighting."
  }, {
    modelType: "SVM with Class Weights",
    suitable: true,
    reason: "Can perform well when configured to account for class imbalance."
  }]
}, {
  id: "insight_digits_1",
  datasetId: "digits",
  title: "Image Feature Space",
  description: "This dataset contains pixel values representing handwritten digits, making it suited for image classification.",
  recommendations: [{
    modelType: "Convolutional Neural Networks",
    suitable: true,
    reason: "Specialized for capturing spatial patterns in image data."
  }, {
    modelType: "K-Nearest Neighbors",
    suitable: true,
    reason: "Can perform surprisingly well on this dataset with the right distance metric."
  }, {
    modelType: "Linear Models",
    suitable: false,
    reason: "May struggle with the complex, non-linear patterns in handwritten digits."
  }]
}, {
  id: "insight_sentiment_1",
  datasetId: "sentiment",
  title: "Sentiment Polarity Distribution",
  description: "Balanced distribution of positive and negative sentiments across the dataset.",
  recommendations: [
    {
      modelType: "XGBoost",
      suitable: true,
      reason: "Effective in capturing nuances in text data."
    },
    {
      modelType: "LightGBM",
      suitable: true,
      reason: "Fast and accurate for text classification."
    },
    {
      modelType: "SVM",
      suitable: false,
      reason: "May require extensive tuning for text data."
    }
  ]
}];
// Mock Model Insights
export const mockModelInsights = [{
  id: "model_insight_1",
  title: "Feature Importance in Iris Classification",
  description: "Petal length and width are the most important features for classifying iris species, while sepal measurements are less discriminative.",
  datasetId: "iris",
  modelIds: ["decision_tree", "random_forest"]
}, {
  id: "model_insight_2",
  title: "Linear vs. Non-linear Models",
  description: "Random Forest outperforms Logistic Regression on this dataset, suggesting non-linear decision boundaries between classes.",
  datasetId: "iris",
  modelIds: ["logistic_regression", "random_forest"]
}, {
  id: "model_insight_3",
  title: "Training Time vs. Accuracy Trade-off",
  description: "Decision Trees train faster than SVMs but achieve slightly lower accuracy, making them suitable for time-sensitive applications.",
  datasetId: "iris",
  modelIds: ["decision_tree", "svm"]
}, {
  id: "model_insight_4",
  title: "Regularization Impact",
  description: "Ridge Regression slightly outperforms standard Linear Regression, indicating some multicollinearity in the housing features.",
  datasetId: "housing",
  modelIds: ["linear_regression", "ridge_regression"]
}, {
  id: "model_insight_5",
  title: "Feature Selection with Lasso",
  description: "Lasso Regression automatically selects the most important features, indicating that not all housing attributes contribute equally to price prediction.",
  datasetId: "housing",
  modelIds: ["lasso_regression"]
}, {
  id: "model_insight_6",
  title: "Ensemble Advantage",
  description: "Random Forest significantly outperforms Logistic Regression on wine quality prediction, likely due to its ability to capture complex feature interactions.",
  datasetId: "wine",
  modelIds: ["logistic_regression", "random_forest"]
}, {
  id: "model_insight_7",
  title: "Specialized Architecture Benefit",
  description: "CNNs achieve near-perfect accuracy on digit recognition, demonstrating the value of specialized architectures for image data.",
  datasetId: "digits",
  modelIds: ["cnn"]
}, {
  id: "model_insight_8",
  title: "Simple Models Can Perform Well",
  description: "KNN achieves surprisingly good results on digit recognition despite its simplicity, suggesting well-separated classes in the feature space.",
  datasetId: "digits",
  modelIds: ["knn"]
}, {
  id: "model_insight_9",
  title: "Gradient Boosting Advantage",
  description: "XGBoost and LightGBM demonstrate superior performance on text datasets by capturing complex patterns.",
  datasetId: "sentiment",
  modelIds: ["xgboost", "lightgbm"]
}];