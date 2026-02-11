import Bill from "../models/bill.model.js";

export const createBill = async (req, res) => {
  const { patient, admission, items } = req.body;

  const totalAmount = items.reduce(
    (acc, item) => acc + item.cost,
    0
  );

  const bill = await Bill.create({
    patient,
    admission,
    items,
    totalAmount
  });

  res.status(201).json(bill);
};

export const getBills = async (req, res) => {
  const bills = await Bill.find()
    .populate("patient admission");
  res.json(bills);
};
