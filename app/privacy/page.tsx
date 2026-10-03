import { ReactNode } from 'react';

export const metadata = {
  title: 'Política de Privacidad - Lucia Study App',
  description: 'Política de privacidad RGPD-compliant de Lucia Study App',
};

export default function PrivacyPage(): ReactNode {
  return (
    <div className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">Política de Privacidad</h1>
        <p className="mb-8 text-sm text-gray-500">Última actualización: 3 de octubre de 2026</p>

        <div className="prose prose-sm max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">1. Introducción</h2>
            <p>
              Lucia Study App respeta tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos
              y protegemos tus datos personales conforme a la Ley Orgánica 3/2018 (RGPD) y la legislación española
              aplicable.
            </p>
            <p>
              <strong>Responsable del tratamiento:</strong> Jose Luis Moya
              <br />
              <strong>Contacto:</strong> support@luciastudy.app
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">2. Datos que Recopilamos</h2>
            <h3 className="text-lg font-semibold text-gray-900">2.1 Datos de Registro</h3>
            <ul className="list-inside list-disc space-y-2">
              <li>Email</li>
              <li>Nombre de usuario</li>
              <li>Contraseña (hasheada, nunca en texto plano)</li>
              <li>Fecha de nacimiento (opcional)</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">2.2 Datos de Uso</h3>
            <ul className="list-inside list-disc space-y-2">
              <li>Preguntas respondidas</li>
              <li>Respuestas seleccionadas</li>
              <li>Tiempo de estudio</li>
              <li>Racha de días (streak)</li>
              <li>Nivel alcanzado</li>
              <li>Puntos XP</li>
              <li>Dispositivo y navegador</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">3. Base Legal para el Tratamiento</h2>
            <p>Procesamos tus datos bajo estas bases legales:</p>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Datos</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Base Legal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Registro y autenticación</td>
                  <td className="border border-gray-300 px-4 py-2">Ejecución de contrato</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Progreso de estudio</td>
                  <td className="border border-gray-300 px-4 py-2">Ejecución de contrato</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Mejoras de la app</td>
                  <td className="border border-gray-300 px-4 py-2">Interés legítimo</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">4. Tus Derechos (RGPD)</h2>
            <p>Tienes derecho a:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong>Acceso:</strong> Saber qué datos tenemos sobre ti
              </li>
              <li>
                <strong>Rectificación:</strong> Corregir datos inexactos
              </li>
              <li>
                <strong>Eliminación:</strong> Solicitar borrar tu cuenta y datos
              </li>
              <li>
                <strong>Portabilidad:</strong> Obtener tus datos en formato exportable
              </li>
              <li>
                <strong>Restricción:</strong> Limitar cómo usamos tus datos
              </li>
              <li>
                <strong>Oposición:</strong> Rechazar análisis automatizado
              </li>
            </ul>
            <p className="mt-4 font-semibold">Para ejercer derechos: support@luciastudy.app</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">5. Seguridad</h2>
            <p>Protegemos tus datos mediante:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>🔒 Cifrado HTTPS/TLS en tránsito</li>
              <li>🔒 Contraseñas hasheadas (bcrypt)</li>
              <li>🔒 Base de datos encriptada en reposo</li>
              <li>🔒 Acceso solo a personal autorizado</li>
              <li>🔒 Auditorías de seguridad regulares</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">6. Contacto</h2>
            <p>
              <strong>Preguntas sobre privacidad:</strong>
              <br />
              support@luciastudy.app
            </p>
            <p className="mt-4">
              <strong>Denuncias ante autoridad:</strong>
              <br />
              Agencia Española de Protección de Datos (AEPD)
              <br />
              www.aepd.es
            </p>
          </section>

          <section className="bg-blue-50 p-4">
            <p className="text-sm">
              <strong>Cumplimiento normativo:</strong>
              <br />
              ✅ RGPD (Reglamento UE 2016/679)
              <br />
              ✅ LSSI-CE (Ley 34/1988)
              <br />
              ✅ Código Civil español
            </p>
          </section>
        </div>

        <div className="mt-8 border-t pt-8">
          <a href="/" className="text-blue-600 hover:text-blue-800">
            ← Volver a inicio
          </a>
        </div>
      </div>
    </div>
  );
}
