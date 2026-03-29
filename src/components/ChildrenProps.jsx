function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-50",
    green: "border-green-500 bg-green-50",
    purple: "border-purple-500 bg-purple-50",
    red: "border-red-500 bg-red-50",
  };

  return (
    <div className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}>
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          {title}
        </h3>
      )}
      <div className="text-gray-700 text-sm space-y-2">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
}

function ChildrenProps() {
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">Children Props</h2>

      <p className="text-gray-600 mb-6">
        The children prop allows you to pass JSX elements or components as children to other components.
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="text-md font-semibold mb-4">
            Card Component with children
          </h3>

          <Container layout="grid">

            <Card title="User Profile" color="blue">
              <p><strong>Name :</strong> Vikash Singh</p>
              <p><strong>Email :</strong> vikash@something.com</p>
              <p><strong>Role :</strong> Developer</p>
            </Card>

        
            <Card title="Statistics" color="green">
              <div className="flex justify-between">
                <span className="font-bold">Total Users :</span>
                <span className="font-semibold">1234</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Active Sessions :</span>
                <span className="font-semibold">567</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Revenue :</span>
                <span className="font-semibold">$89,000</span>
              </div>
            </Card>

            <Card title="Quick Actions" color="purple">
                <button className="bg-purple-600 text-white w-full py-2 rounded-md text-sm hover:bg-purple-700 transition">
                  Create New
                </button>
                <button className="bg-gray-600 text-white w-full py-2 rounded-md text-sm hover:bg-gray-700 transition">
                  View All
                </button>
            </Card>

            <Card title="Warning" color="red">
              <p>
                Your trial period ends in 5 days. Please upgrade your account to continue using all features.
              </p>
            </Card>

          </Container>
        </div>
      </div>
    </section>
  );
}

export default ChildrenProps;