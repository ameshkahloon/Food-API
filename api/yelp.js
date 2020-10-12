import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer ZutZ-EHvo3PxrFpX95rHPv1NOnm97_gzqMa88k_K3U8QtReccjwe-pz_X9t0t-lfJY_RwQIpn6eUFPMvGlMxmF3sNlCHvlidNU-e_UoISoi5g72smTDxla_Zi7r2XnYx'
    }
});