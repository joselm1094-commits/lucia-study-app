import { ReactNode } from 'react';

export const metadata = {
  title: 'Términos de Servicio - Lucia Study App',
  description: 'Términos de servicio de Lucia Study App',
};

export default function TermsPage(): ReactNode {
  return (
    <div className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">Términos de Servicio</h1>
        <p className="mb-8 text-sm text-gray-500">Última actualización: 3 de octubre de 2026</p>

        <div className="prose prose-sm max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">1. Aceptación de Términos</h2>
            <p>
              Al descargar, acceder o usar Lucia Study App ("la Aplicación"), aceptas estos términos. Si no estás de
              acuerdo, <strong>no uses la Aplicación.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">2. Uso de la Aplicación</h2>
            <h3 className="text-lg font-semibold text-gray-900">2.1 Licencia de Uso</h3>
            <p>Te otorgamos una licencia limitada, revocable y no exclusiva para:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>✅ Usar la Aplicación en dispositivos personales</li>
              <li>✅ Acceder a contenido educativo</li>
              <li>✅ Guardar y consultar tu progreso</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">2.2 Restricciones</h3>
            <p>Está <strong>prohibido:</strong></p>
            <ul className="list-inside list-disc space-y-2">
              <li>❌ Copiar, modificar o distribuir el código</li>
              <li>❌ Intentar acceder a sistemas sin autorización</li>
              <li>❌ Usar bots, scrapers o automatización</li>
              <li>❌ Sublicenciar la Aplicación a terceros</li>
              <li>❌ Usar la Aplicación con fines comerciales sin permiso</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">2.3 Cuenta de Usuario</h3>
            <ul className="list-inside list-disc space-y-2">
              <li>Eres responsable de mantener la confidencialidad de tu contraseña</li>
              <li>Notificarás inmediatamente de acceso no autorizado</li>
              <li>No puedes transferir tu cuenta a otros</li>
              <li>Podemos suspender cuentas con violaciones de estos términos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">3. Contenido Educativo</h2>
            <h3 className="text-lg font-semibold text-gray-900">3.1 Propiedad Intelectual</h3>
            <ul className="list-inside list-disc space-y-2">
              <li>Todo contenido (preguntas, explicaciones, videos) es propiedad intelectual de Lucia Study App</li>
              <li>Está protegido por derechos de autor y leyes de propiedad intelectual</li>
              <li>Está <strong>prohibida</strong> la reproducción sin permiso escrito</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">3.2 Precisión del Contenido</h3>
            <p>Nos esforzamos por proporcionar información precisa, pero:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>📌 No garantizamos 100% exactitud</li>
              <li>📌 El contenido se basa en legislación vigente</li>
              <li>📌 Cambios legales no siempre se reflejan inmediatamente</li>
              <li>📌 No es sustituto de asesoramiento legal profesional</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">4. Limitación de Responsabilidad</h2>
            <p className="font-bold">LA APLICACIÓN SE PROPORCIONA "TAL CUAL"</p>
            <h3 className="text-lg font-semibold text-gray-900">4.1 No Garantizamos</h3>
            <ul className="list-inside list-disc space-y-2">
              <li>❌ Disponibilidad 24/7 (pero intentamos)</li>
              <li>❌ Que el servicio sea perfecto</li>
              <li>❌ Que cumplirá exactamente tus expectativas</li>
              <li>❌ Seguridad 100% (riesgo inherente en internet)</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">4.2 Responsabilidad Limitada</h3>
            <p>En la medida máxima permitida por ley:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>No somos responsables de daños indirectos</li>
              <li>Responsabilidad limitada a lo que pagaste (máx €50)</li>
              <li>No somos responsables de pérdida de datos por tu negligencia</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">5. Política de Abusos</h2>
            <h3 className="text-lg font-semibold text-gray-900">5.1 Conducta Prohibida</h3>
            <p>No puedes:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Acosar, discriminar o amenazar a otros usuarios</li>
              <li>Publicar contenido ilegal, obsceno o de odio</li>
              <li>Spam o manipulación de contenido</li>
              <li>Impersonar a otros</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">5.2 Consecuencias</h3>
            <p>Podemos:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>⚠️ Advertir</li>
              <li>🚫 Suspender cuenta</li>
              <li>❌ Eliminar permanentemente</li>
              <li>📞 Reportar a autoridades (si es necesario)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">6. Leyes y Jurisdicción</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>Estos términos se rigen por leyes españolas</li>
              <li>Cualquier disputa se resuelve en juzgados de Madrid</li>
              <li>Si alguna cláusula es inválida, el resto sigue vigente</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">7. Descargo de Responsabilidad</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong>NO ASESORAMIENTO LEGAL:</strong> La app no reemplaza a un abogado
              </li>
              <li>
                <strong>NO GARANTÍA DE ÉXITO:</strong> Aprobar oposiciones depende de ti
              </li>
              <li>
                <strong>INFORMACIÓN EDUCATIVA:</strong> Solo propósitos de aprendizaje
              </li>
              <li>
                <strong>CAMBIOS LEGALES:</strong> Ley puede cambiar sin avisar
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">8. Contacto</h2>
            <p>
              <strong>Preguntas sobre estos términos:</strong>
              <br />
              support@luciastudy.app
            </p>
          </section>

          <section className="bg-yellow-50 p-4">
            <p className="text-sm">
              <strong>Cumplimiento normativo:</strong>
              <br />
              ✅ Ley 34/1988 (LSSI-CE)
              <br />
              ✅ Ley Orgánica 3/2018 (RGPD)
              <br />
              ✅ Código Civil español
              <br />
              ✅ Leyes de protección de consumidor
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
