const stats = [
    { id: 1, name: 'of Hands-on Experience', value: '5+ Years' },
    { id: 2, name: 'Helped solve their problem', value: '150+ Clients' },
    { id: 3, name: 'Customer satisfaction rate', value: '100%' },
  ]
  
  export default function Example() {
    return (
      <div className=" py-24 sm:py-24 mt-10 mx-6 border-t-[2px] border-zinc-400">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  