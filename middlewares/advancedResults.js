const advancedResults = model => async (req, res, next) => {
  let query;

  const reqQuery = { ...req.query };

  // Fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit', 'offset'];

  removeFields.forEach(param => delete reqQuery[param]);

  let queryStr = JSON.stringify(reqQuery);

  // Create mongoose operators ($gt, $gte, etc)
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);

  let queryObj = JSON.parse(queryStr);

  if (reqQuery.name) {
    const re = new RegExp(reqQuery.name, 'i');
    queryObj.name = re;
  }

  query = model.find(queryObj);

  let { select, sort, page, limit, offset } = req.query;

  // Select fields
  if (select) {
    const fields = select.replace(/,/g, ' ');
    query = query.select(fields);
  }

  // Sort
  if (sort) {
    const sortBy = sort.replace(/,/g, ' ');
    query = query.sort(sortBy);
  }

  // Pagination
  page = Number(page) || 1;
  limit = Number(limit) || 50;
  startIndex = Number(offset) || (page - 1) * limit;
  endIndex = Number(offset) + page * limit || page * limit;

  const totalResults = await query;

  query = query.skip(startIndex).limit(limit);

  const results = await query;

  // Pagination result
  const pagination = {};

  if (endIndex < totalResults.length && !offset) {
    pagination.next = { page: page + 1, limit };
  }

  if (startIndex > 0 && !offset) {
    pagination.prev = { page: page - 1, limit };
  }

  res.advancedResults = {
    success: true,
    count: results.length,
    pagination,
    data: results,
  };

  next();
};

module.exports = advancedResults;
