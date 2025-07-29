import axiosInstance from "./axiosInstance";

// Get products by country (for popular destinations)
export const getProductsByCountry = async (countryCode) => {
  const response = await axiosInstance.get(`/products?country=${countryCode}`);
  return response.data;
};

// Get products by region (for regional eSIM plans)
export const getProductsByRegion = async (regionName) => {
  try {
    const response = await axiosInstance.get(`/products?region=${regionName}`);
    return response.data?.data || response.data; // Handle both response structures
  } catch (error) {
    console.error("Error fetching products by region:", error);
    return { products: [] };
  }
};

// Get Region Groups by ID
export const getRegionGroupsById = async (id) => {
  const response = await axiosInstance.get(`/region-groups/${id}`);
  return response.data;
};

// Get All Regions
export const getRegions = async () => {
  const response = await axiosInstance.get("/regions");
  return response.data;
};

// Get All Region Groups
export const getRegionGroups = async () => {
  const response = await axiosInstance.get("/region-groups");
  return response.data;
};