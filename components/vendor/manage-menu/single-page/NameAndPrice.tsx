import FormInput from "@/components/form/FormInput";

function NameAndPrice({ name, price }: { name: string; price: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <FormInput
        name="name"
        type="text"
        label="Meal Name"
        required
        defaultValue={name}
        placeholder="Name"
        className="rounded-sm border"
      />
      <FormInput
        name="price"
        type="number"
        label="Price"
        required
        defaultValue={price}
        placeholder="Enter Meal Price(&#8358;)"
        className="rounded-sm border"
      />
    </div>
  );
}

export default NameAndPrice;
